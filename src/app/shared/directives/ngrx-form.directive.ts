import { Directive, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appNgrxForm]'
})
export class NgrxFormDirective implements OnInit, OnDestroy {

  // tslint:disable-next-line: no-input-rename
  @Input('appNgrxForm') path: string;
  private destroy$: Subject<null> = new Subject<null>();

  constructor(
    private store: Store<any>,
    private formGroupDirective: FormGroupDirective,
  ) { }

  ngOnInit() {
    // listen & dispatch action when input value changes
    this.formGroupDirective.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {

        this.store.dispatch({
          type: 'FORM_VALUE_CHANGES',
          payload: {
            path: this.path,
            value,
          }

        });

      });

    // listen to changes from redux and update form
    this.store.select(this.path) // 'chain.server'
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        if (state) {
          console.log(state);
          this.formGroupDirective.form.patchValue({ ...state.form }, { emitEvent: false });
        }

      });
  }

  ngOnDestroy() {
    // close all open directives
    this.destroy$.next();
    this.destroy$.complete();
  }
}
