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

  constructor(
    public store: Store<any>,
  ) { }

  ngOnInit(): void {

    this.store.dispatch({
      type: 'SANDBOX_LOAD',
      payload: '',
    });

    this.store.select('sandboxAction')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data) => {
        if (data) {
          console.log(data.entities);
        }
      });

  }

}
