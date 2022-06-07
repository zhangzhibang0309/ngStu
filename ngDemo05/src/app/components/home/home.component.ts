import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // 页面每次刷新
  ngOnInit(): void {

  }

  // dom加载完成
  ngAfterViewInit() {
    let box: any = document.getElementsByClassName("box1")[0]
    console.log(box.innerHTML)
  }

}
