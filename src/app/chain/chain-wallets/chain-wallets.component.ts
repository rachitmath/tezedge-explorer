import { Component, OnInit } from '@angular/core';

export interface Wallet {
  address: string;
  balance: string;
}

const ELEMENT_DATA: Wallet[] = [
  { address: 'tz1QJ1ACf4HnD6aHpZzex7CSUKr65y2xQNdH', balance: '1000 ꜩ' },
  { address: 'tz1QJ1ACf4HnD6aHpZzex7CSUKr65y2xQNdH', balance: '1000 ꜩ' },
  { address: 'tz1QJ1ACf4HnD6aHpZzex7CSUKr65y2xQNdH', balance: '1000 ꜩ' },
  { address: 'tz1QJ1ACf4HnD6aHpZzex7CSUKr65y2xQNdH', balance: '1000 ꜩ' },
  { address: 'tz1QJ1ACf4HnD6aHpZzex7CSUKr65y2xQNdH', balance: '1000 ꜩ' },
  { address: 'tz1QJ1ACf4HnD6aHpZzex7CSUKr65y2xQNdH', balance: '1000 ꜩ' },
  { address: 'tz1QJ1ACf4HnD6aHpZzex7CSUKr65y2xQNdH', balance: '1000 ꜩ' }

];

@Component({
  selector: 'app-chain-wallets',
  templateUrl: './chain-wallets.component.html',
  styleUrls: ['./chain-wallets.component.scss']
})
export class ChainWalletsComponent implements OnInit {

  displayedColumns: string[] = ['Address', 'Balance'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}