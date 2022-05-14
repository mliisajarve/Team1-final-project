import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOutcomePageComponent } from './search-outcome-page.component';

describe('SearchOutcomePageComponent', () => {
  let component: SearchOutcomePageComponent;
  let fixture: ComponentFixture<SearchOutcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOutcomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOutcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
