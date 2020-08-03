import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainSetupComponent } from './chain-setup.component';

describe('ChainSetupComponent', () => {
  let component: ChainSetupComponent;
  let fixture: ComponentFixture<ChainSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
