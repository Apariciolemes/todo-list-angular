import { Component } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent {

  public tasks: Array<string> = ['Neto', 'João', 'Pedro']

  removeTask(task: string) {
    const index = this.tasks.indexOf(task)
    this.tasks.splice(index, 1)
  }

  createTask(newTask: string) {
    this.tasks.push(newTask)
  }
}
