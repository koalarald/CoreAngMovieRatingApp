import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesratingspeopleComponent } from './moviesratingspeople.component';

describe('MoviesratingspeopleComponent', () => {
  let component: MoviesratingspeopleComponent;
  let fixture: ComponentFixture<MoviesratingspeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesratingspeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesratingspeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
