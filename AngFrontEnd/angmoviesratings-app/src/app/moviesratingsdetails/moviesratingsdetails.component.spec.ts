import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesratingsdetailsComponent } from './moviesratingsdetails.component';

describe('MoviesratingsdetailsComponent', () => {
  let component: MoviesratingsdetailsComponent;
  let fixture: ComponentFixture<MoviesratingsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesratingsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesratingsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
