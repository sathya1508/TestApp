import { Component, OnInit } from '@angular/core';
import {Task} from '../task'
import {TaskService} from '../service/task.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 tasks:Task[] = [];
  constructor(private taskService:TaskService) { }

  ngOnInit():void {
     this.taskService.getTaskDetails().subscribe((tasks) => (this.tasks = tasks));
  }

}
