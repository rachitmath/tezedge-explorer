import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mempool-transaction-table',
  templateUrl: './mempool-transaction-table.component.html',
  styleUrls: ['./mempool-transaction-table.component.scss']
})
export class MempoolTransactionTableComponent implements OnInit {

  public transactions = new Array<any>(3);

  constructor() { }

  ngOnInit(): void {
  }

}
