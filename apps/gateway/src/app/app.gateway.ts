import {
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { SignalingEvent, SignalMessage } from '@audiortc/core/ports';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class AppGateway implements OnGatewayConnection {
  @WebSocketServer()
  private server: Server;

  handleConnection(@ConnectedSocket() client: Socket) {
    client.emit(SignalingEvent.Connection, { id: client.id });
  }

  @SubscribeMessage(SignalingEvent.KnockKnock)
  knockKnock(
    @ConnectedSocket() contact: Socket,
    @MessageBody() payload: SignalMessage
  ) {
    const room = this.takeOrStartRoom(payload);
    if (room.length >= 0 && room.length < 2) {
      contact.emit(SignalingEvent.Available, true);
    } else {
      contact.emit(SignalingEvent.Available, false);
    }
  }

  @SubscribeMessage(SignalingEvent.Message)
  onMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() payload: SignalMessage
  ) {
    if (socket.rooms.has(payload.room)) {
      socket.to(payload.room).emit('message', payload);
    } else {
      socket.join(payload.room);
      socket.broadcast.emit('message', payload);
    }
  }

  private takeOrStartRoom({ room }: SignalMessage) {
    const adapter = this.server.sockets.adapter;
    return adapter.rooms[room] ?? { length: 0 };
  }
}
