import { Injectable } from '@angular/core';
import { TASKS } from '../mock-task'
import { Task } from '../task'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTaskDetails(): Observable<Task[]>
  {
    const tasks = of(TASKS);
    return tasks;
  }
}
