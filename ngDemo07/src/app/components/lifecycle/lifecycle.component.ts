import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {
  @Input('title') public title: any;


  public msg: string = 'asd'
  public mod: string = 'mod'

  // 1 先触发构造函数
  constructor() {
    console.log('1constructor')
  }

  // 2 如果有父子组件传值触发
  ngOnChanges() {
    console.log("2ngChanges")
  }

  // 3 接着触发
  ngOnInit(): void {
    console.log("3ngOnInit")
  }

  // 4
  ngDoCheck() {
    console.log("4ngDoCheck")
  }

  // 5
  ngAfterContentInit() {
    console.log("5ngAfterContentInit")
  }

  // 6
  ngAfterContentChecked() {
    console.log("6ngAfterContentchecked")
  }

  // 7 视图加载完成
  ngAfterViewInit() {
    console.log("7ngAfterViewInit")
  }

  // 8
  ngAfterViewChecked() {
    console.log("8ngAfterViewChecked")
  }

  // 9 组件销毁的时候
  ngOnDestroy() {
    console.log("9ngOnDestroy")
  }


  changeMsg() {
    this.msg = "aaa"
  }
}
