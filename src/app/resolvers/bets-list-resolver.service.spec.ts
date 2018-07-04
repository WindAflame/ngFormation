import { TestBed, inject } from '@angular/core/testing';

import { BetsListResolverService } from './bets-list-resolver.service';

describe('BetsListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetsListResolverService]
    });
  });

  it('should be created', inject([BetsListResolverService], (service: BetsListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
