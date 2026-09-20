type Listener = (count: number) => void;

let totalCardRenders = 0;
const listeners = new Set<Listener>();

const notify = () => listeners.forEach((listener) => listener(totalCardRenders));

export const renderTracker = {
  recordRender: () => {
    totalCardRenders += 1;
    notify();
  },
  getCount: () => totalCardRenders,
  reset: () => {
    totalCardRenders = 0;
    notify();
  },
  subscribe: (listener: Listener) => {
    listeners.add(listener);
    listener(totalCardRenders);
    return () => {
      listeners.delete(listener);
    };
  },
};
