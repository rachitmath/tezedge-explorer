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
  private destroy$ = new Subject<null>();
  private updating = false;

  constructor(
    private store: Store<any>,
    private formGroupDirective: FormGroupDirective,
  ) { }

  ngOnInit() {
    console.log(this.path);
    // listen & dispatch action when input value changes
    this.formGroupDirective.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.updating = true;
        console.log(value);

        this.store.dispatch({
          type: 'FORM_VALUE_CHANGES',
          payload: {
            path: this.path,
            value,
            // dirty: this.formGroupDirective.dirty,
            // errors: this.formGroupDirective.errors,
          }

        });

      });

    // listen to changes from redux and update form
    this.store.select(this.path)
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        // update form form with redux data
        if (state) {
          console.log('[ngrx-from] state:  ', state.form);
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
