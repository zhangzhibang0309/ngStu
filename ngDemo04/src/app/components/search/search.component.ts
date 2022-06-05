import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword: string = ''
  historyList: unknown[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  doSearch() {
    if (this.historyList.indexOf(this.keyword) == -1) {
      this.historyList.push(this.keyword)
    }
    this.keyword = ''
    console.log(this.keyword)
  }

  delHistory(index: number) {
    this.historyList.splice(index, 1)
  }

}
