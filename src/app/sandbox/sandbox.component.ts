import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  public onDestroy$ = new Subject();
  public chainData;

  constructor(
    public store: Store<any>,
  ) { }

  ngOnInit(): void {

    this.store.select('chain')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data: any) => {
        if (data) {
          // tslint:disable-next-line: no-string-literal
          this.chainData = data['server']['form'];
        }
      });

  }

}
