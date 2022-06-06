import { Component, OnInit } from '@angular/core';

import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {


  keyword: string = ''
  todoList: any[] = [];

  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    let todol = this.storage.get('todoList')
    if (todol) this.todoList = todol
  }

  doAdd(e: any) {
    // if (!tofoListHasKeyword(this.todoList, this.keyword)) {
    if (e.keyCode == 13) {
      this.todoList.push({
        title: this.keyword,
        status: 0
      })

      this.storage.set('todoList', this.todoList)
    }
    // }

  }

  dele(key: number) {
    this.todoList.splice(key, 1)

    this.storage.set('todoList', this.todoList)
  }

  checkboxChange() {
    this.storage.set('todoList', this.todoList)
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
