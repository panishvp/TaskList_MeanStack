import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  getAllTasks() {
    return this.http.get('http://localhost:3000/api/tasks')
    .map(res => res.json());
  }

  addTask(newTask) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/tasks', newTask, { headers: headers })
    .map( res => res.json());
  }
}
