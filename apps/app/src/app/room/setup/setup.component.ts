import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'audiortc-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  inputs: MediaDeviceInfo[] = []
  outputs: MediaDeviceInfo[] = []

  form = new FormGroup({
    input: new FormControl('default'),
    
  })

  inputControl = new FormControl('default')
  outputControl = new FormControl('default')

  ngOnInit(): void {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      console.log(devices)
      this.inputs = devices.filter(device => device.kind === 'audioinput')
      this.outputs = devices.filter(device => device.kind === 'audiooutput')
    })
  }

  onSubmit() {
    console.log(this.form.value)
  }

}
