import { Component, OnInit } from '@angular/core';
import { Tasks } from '../task';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task-scheduler',
  templateUrl: './task-scheduler.component.html',
  styleUrls: ['./task-scheduler.component.css'],
  providers:[DataService]
})
export class TaskSchedulerComponent implements OnInit {

  tasksList: Tasks[] = [];

  constructor(private dataservice: DataService) { }

  getTasks(){

      this.dataservice.getAllTasks()
      .subscribe( tasks => {
        this.tasksList = tasks;
        console.log('data '+ this.tasksList[0].taskName);
      })
  }

  ngOnInit() {
    this.getTasks();
  }

}
