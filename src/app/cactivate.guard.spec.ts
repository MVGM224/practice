import { TestBed, async, inject } from '@angular/core/testing';

import { CactivateGuard } from './cactivate.guard';

describe('CactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CactivateGuard]
    });
  });

  it('should ...', inject([CactivateGuard], (guard: CactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
