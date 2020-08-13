import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

export interface Wallet {
  address: string;
  balance: string;
}

@Component({
  selector: 'app-chain-wallets',
  templateUrl: './chain-wallets.component.html',
  styleUrls: ['./chain-wallets.component.scss']
})
export class ChainWalletsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['Address', 'Balance'];
  dataSource: Wallet[];

  public onDestroy$ = new Subject();

  constructor(
    public store: Store<any>,
  ) { }

  ngOnInit(): void {

    this.store.select('chainAction')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data) => {
        if (data.stream) {
          const rawWalletAddress = data.entities.bootstrap_accounts;
          this.dataSource = rawWalletAddress.map(rawWallet => this.mapWallet(rawWallet));
        }
      });
  }

  mapWallet(rawWallet: any): Wallet {
    return {
      address: rawWallet[0],
      balance: rawWallet[1],
    } as unknown as Wallet;
  }

  ngOnDestroy() {
    // stop streaming logs actions
    this.store.dispatch({
      type: 'CHAIN_WALLET_STOP',
    });
    // close all observables
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
