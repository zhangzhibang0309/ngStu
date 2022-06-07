import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title:string = "我是header"
  constructor() { }

  ngOnInit(): void {
  }

  run() {
    console.log('runrunrun')
  }

}
