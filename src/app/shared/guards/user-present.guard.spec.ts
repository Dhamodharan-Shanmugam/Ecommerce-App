import { TestBed, async, inject } from '@angular/core/testing';

import { UserPresentGuard } from './user-present.guard';

describe('UserPresentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPresentGuard]
    });
  });

  it('should ...', inject([UserPresentGuard], (guard: UserPresentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
