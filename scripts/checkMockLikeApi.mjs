import { getMockLikeBehavior } from '../src/mock/likeApi.ts';

const first = getMockLikeBehavior(1);
const second = getMockLikeBehavior(2);
const fifth = getMockLikeBehavior(5);

if (!(first.latencyMs > second.latencyMs && !first.shouldFail && fifth.shouldFail)) {
  throw new Error('Mock network schedule is not exercising ordering and failure cases');
}

console.log('Mock network schedule check passed');
