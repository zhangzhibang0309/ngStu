import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showAside() {
    let dom: any = document.getElementById('aside')
    dom.style.transform = "translate(0,0)"
  }
}
