import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mempool-transaction-detail',
  templateUrl: './mempool-transaction-detail.component.html',
  styleUrls: ['./mempool-transaction-detail.component.scss']
})
export class MempoolTransactionDetailComponent implements OnInit {

  @Input() currentTransaction: [];

  constructor() { }

  ngOnInit(): void {
  }

}
