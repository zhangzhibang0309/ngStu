import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {


  keyword: string = ''
  todoList: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  doAdd(e: any) {
    // if (!tofoListHasKeyword(this.todoList, this.keyword)) {
    if (e.keyCode == 13) {
      this.todoList.push({
        title: this.keyword,
        status: 0
      })
    }
    // }

  }

  dele(key: number) {
    this.todoList.splice(key, 1)
  }

  // 异步问题 类型问题
  // tofoListHasKeyword(todolist: any, keyeord: any) {
  //   todolist.forEach(item => {
  //     if (item.title == this.keyword) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   })
  // }
}
