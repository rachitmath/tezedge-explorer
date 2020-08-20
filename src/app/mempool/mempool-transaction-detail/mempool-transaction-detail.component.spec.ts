import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MempoolTransactionDetailComponent } from './mempool-transaction-detail.component';

describe('MempoolTransactionDetailComponent', () => {
  let component: MempoolTransactionDetailComponent;
  let fixture: ComponentFixture<MempoolTransactionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MempoolTransactionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MempoolTransactionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
