import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.scss']
})
export class FormTasksComponent {
  inputValue = new FormControl('');

  @Output() emitCreateTask = new EventEmitter<string | any>();

  createTask() {
    this.emitCreateTask.emit(this.inputValue.value);
  }
}
