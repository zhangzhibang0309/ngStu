import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @ViewChild('footer') footer: any

  constructor() { }

  ngOnInit(): void {
  }

  getCM() {
    // 获取子组件数据
    console.log(this.footer.msg)

  }

  getCR() {
    // 执行子组件run
    this.footer.run()
  }

  run() {
    console.log('runrunrun')
  }
}
