import { TestBed } from '@angular/core/testing';

import { ImdbMoviesService } from './imdb-movies.service';

describe('ImdbMoviesService', () => {
  let service: ImdbMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImdbMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
