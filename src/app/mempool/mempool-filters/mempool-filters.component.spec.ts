import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MempoolFiltersComponent } from './mempool-filters.component';

describe('MempoolFiltersComponent', () => {
  let component: MempoolFiltersComponent;
  let fixture: ComponentFixture<MempoolFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MempoolFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MempoolFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
