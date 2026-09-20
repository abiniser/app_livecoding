import { renderTracker } from '../src/utils/renderTracker.ts';

const seen = [];
const unsubscribe = renderTracker.subscribe((count) => seen.push(count));

renderTracker.recordRender();
renderTracker.recordRender();
unsubscribe();
renderTracker.reset();

if (seen.join(',') !== '0,1,2') {
  throw new Error(`Unexpected tracker notifications: ${seen.join(',')}`);
}

console.log('Render tracker check passed');
