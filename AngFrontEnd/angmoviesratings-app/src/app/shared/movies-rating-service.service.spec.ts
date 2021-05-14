import { TestBed } from '@angular/core/testing';

import { MoviesRatingServiceService } from './movies-rating-service.service';

describe('MoviesRatingServiceService', () => {
  let service: MoviesRatingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesRatingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
