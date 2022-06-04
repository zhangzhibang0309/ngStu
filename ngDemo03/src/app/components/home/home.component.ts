import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title:string = "我是title"
  public prcUrl: any = 'https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20220605000610.png'

  public list: any = [
    {
      title: '我是新闻1'
    },
    {
      title: '我是新闻2'
    },
    {
      title: '我是新闻3'
    }
  ]

  public flag: boolean = false

  public orderStatus: number = 3 // 1表示已经支付 2表示支付并且确认订单 3的表示发货 4表示收获 5表示无效

  attr:string = "yellow"

  public today:any = new Date()

  keywords:string = "aaa"

  constructor() {
    console.log(this.today)
   }

  ngOnInit(): void {
  }

  run() {
    console.log('执行方法')
  }

  getDate() {
    console.log(this.title)
  }

  runEvent(e:any) {
    console.log(e.target)
  }

  keyDown(e:any):void {
    console.log(e)
    console.log(e.target.value)
  }

  keyUp() {
    console.log('keyUp')
  }

  changeValue() {
    this.keywords = "qwe"
  }

  ngModelDown() {
    console.log(this.keywords)
  }
}
