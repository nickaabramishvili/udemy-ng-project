import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-task',
  templateUrl: './databinding-task.component.html',
  styleUrls: ['./databinding-task.component.scss'],
})
export class DatabindingTaskComponent implements OnInit {
  userName = '';
  constructor() {}

  ngOnInit(): void {}
  onInputClear() {
    this.userName = '';
    console.log(this.userName);
  }
}
