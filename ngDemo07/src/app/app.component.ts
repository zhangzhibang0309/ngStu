import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ngDemo07';

  public flag: boolean = true

  changeTitle() {
    this.title = 'gaibian title'
  }

  changeFlag() {
    this.flag = !this.flag
  }
}
