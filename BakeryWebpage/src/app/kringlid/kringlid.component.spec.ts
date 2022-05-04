import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KringlidComponent } from './kringlid.component';

describe('KringlidComponent', () => {
  let component: KringlidComponent;
  let fixture: ComponentFixture<KringlidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KringlidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KringlidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
