import { UsersByNamePipe } from './users-by-name.pipe';

describe('UsersByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new UsersByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
