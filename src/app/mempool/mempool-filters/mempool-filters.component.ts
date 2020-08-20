import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mempool-filters',
  templateUrl: './mempool-filters.component.html',
  styleUrls: ['./mempool-filters.component.scss']
})
export class MempoolFiltersComponent implements OnInit {

  chipsList = [
    { name: 'Bootstrap' },
    { name: 'Advertise' },
    { name: 'Meta' },
    { name: 'Head' },
    { name: 'Branch' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
