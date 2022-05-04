import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiakesedComponent } from './saiakesed.component';

describe('SaiakesedComponent', () => {
  let component: SaiakesedComponent;
  let fixture: ComponentFixture<SaiakesedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiakesedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiakesedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
