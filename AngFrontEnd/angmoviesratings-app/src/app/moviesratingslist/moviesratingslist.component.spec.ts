import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesratingslistComponent } from './moviesratingslist.component';

describe('MoviesratingslistComponent', () => {
  let component: MoviesratingslistComponent;
  let fixture: ComponentFixture<MoviesratingslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesratingslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesratingslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
