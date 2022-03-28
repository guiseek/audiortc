export interface SignalMessage {
  sdp: RTCSessionDescription;
  ice: RTCIceCandidate;
  room: string;
  user: string;
}
