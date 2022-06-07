import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() public outer1 = new EventEmitter()

  public msg = "我是子组件的一个msg"
  constructor() { }

  ngOnInit(): void {
  }

  run() {
    console.log('run')
  }

  sendPar() {
    this.outer1.emit("我是子组件数据")
  }
}
