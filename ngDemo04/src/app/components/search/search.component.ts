import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword: string = ''
  historyList: unknown[] = [];

  constructor(public storage: StorageService) {
    // let s = this.storage.get()
  }

  // 页面刷刷新
  ngOnInit(): void {
    let searchList = this.storage.get('searchList')
    if (searchList) {
      console.log("sdsd")
      this.historyList = searchList
    }
  }

  doSearch() {
    if (this.historyList.indexOf(this.keyword) == -1) {
      this.historyList.push(this.keyword)

      this.storage.set('searchList', this.historyList)
    }
    this.keyword = ''
  }

  delHistory(index: number) {
    this.historyList.splice(index, 1)

    this.storage.set('searchList', this.historyList)
  }

}
