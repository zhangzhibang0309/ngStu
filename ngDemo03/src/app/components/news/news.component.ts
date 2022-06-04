import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // 声明属性的几种方式
  // public 类内、类外都可以访问
  // protected 类内和子类可以访问
  // private 只有当前类才可以访问
  public title: string = "我是新闻组件"
  msg: string = "我是一个新闻组件的msg"// 相当于public

  public student: string = '张三'

  private name = 'zzb'

  public userInfo: {
    username: string,
    age: number
  } = {
      username: '张三',
      age: 22
    }

  public message: any;


  public content = '<div>我是绑定的html</div>'


  arr: unknown[] = [1, 2, 3, 4, 5]




  constructor() {
    this.message = 'message'
    console.log('获取message')
    setTimeout(() => {
      this.message = 'message触发响应式'
    }, 1000);
  }

  ngOnInit(): void {
  }

}
