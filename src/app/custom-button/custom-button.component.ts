import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {

  @Output() eventEmitButton = new EventEmitter<string>();
  @Input() customLabel!: string

  emitEvent() {
    this.eventEmitButton.emit('teste')
  }
}
