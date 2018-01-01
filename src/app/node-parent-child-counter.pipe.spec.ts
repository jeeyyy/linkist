import { NodeParentChildCounterPipe } from './node-parent-child-counter.pipe';

describe('NodeParentChildCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new NodeParentChildCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
