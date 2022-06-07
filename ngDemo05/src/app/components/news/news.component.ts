import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  // 从core引入ViewChild 获取dom节点 要在dom加载完成后的钩子ngAfterViewInit中去使用
  @ViewChild("myBox") myBox: any
  // 获取一个组件
  @ViewChild('header') header:any
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    console.log(this.myBox)
    this.myBox.nativeElement.style.background = "red"
    console.log(this.myBox.nativeElement.innerHTML)


    // 调用子组件方法
    this.header.run()
  }
}
