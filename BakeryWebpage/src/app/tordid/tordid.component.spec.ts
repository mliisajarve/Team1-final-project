import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TordidComponent } from './tordid.component';

describe('TordidComponent', () => {
  let component: TordidComponent;
  let fixture: ComponentFixture<TordidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TordidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TordidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
