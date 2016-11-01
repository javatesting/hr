import {Component, OnInit}          from '@angular/core';
import {Router} from "@angular/router";
import {HistoryService} from "./history.service";
import 'rxjs/add/operator/toPromise';
import {History} from './history';

@Component({
  moduleId: module.id,
  selector: 'history',
  templateUrl: 'history.component.html'
})
export class HistoryComponent{
  subHeader = "History";
  historys: History[];
  
  constructor(
      private historyService: HistoryService, private router: Router) {
      this.getHistory();
  }

  getHistory(): void {
    this.historyService
        .getHistory()
        .then(history => this.historys = history);
  }
  
}
