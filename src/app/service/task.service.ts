import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../task'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpcall:HttpClient) { }
 private apiURL = 'http://localhost:5000/tasks/';
  getTaskDetails(): Observable<Task[]>
  {
    return this.httpcall.get<Task[]>(this.apiURL);
  }
}
