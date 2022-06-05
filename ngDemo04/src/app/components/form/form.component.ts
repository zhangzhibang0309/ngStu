import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public peopleInfo: any = {
    username: '',
    sex: "2",
    cities: ['北京','上海','深圳'],
    city: '北京',
    hobby: [
      {
        title: '吃饭',
        checked: false
      },
      {
        title: '睡觉',
        checked: false
      },
      {
        title: '敲代码',
        checked: false
      },
    ],
    mark: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmmit() {
    console.log(this.peopleInfo)
  }

}
