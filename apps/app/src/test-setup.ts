import 'jest-preset-angular/setup-jest';

Object.defineProperty(window.navigator, 'mediaDevices', {
  value: {
    enumerateDevices: jest.fn().mockResolvedValue([
      { kind: 'audioinput', deviceId: 'default', label: 'default' },
      { kind: 'audiooutput', deviceId: 'default', label: 'default' },
    ])
  },
  writable: true
})
