import { TestBed } from '@angular/core/testing';

import { ProducCategoriesService } from './produc-categories.service';

describe('ProducCategoriesService', () => {
  let service: ProducCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
