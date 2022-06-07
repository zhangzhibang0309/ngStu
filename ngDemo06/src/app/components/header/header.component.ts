import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: any
  @Input() run: any
  @Input() home: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.home)
  }

  getPR() {
    this.run()
  }

}
