import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MempoolTransactionTableComponent } from './mempool-transaction-table.component';

describe('MempoolTransactionTableComponent', () => {
  let component: MempoolTransactionTableComponent;
  let fixture: ComponentFixture<MempoolTransactionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MempoolTransactionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MempoolTransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
