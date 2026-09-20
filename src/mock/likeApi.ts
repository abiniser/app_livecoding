let requestCount = 0;

export const getMockLikeBehavior = (requestNumber: number) => ({
  latencyMs: requestNumber % 2 === 0 ? 200 : 700,
  shouldFail: requestNumber % 5 === 0,
});

// Alternating latency forces overlapping calls to complete out of order.
// Every fifth request fails so rollback behavior can be exercised reliably.
export const mockLikeApi = async (productId: string): Promise<boolean> => {
  const behavior = getMockLikeBehavior(++requestCount);
  await new Promise((resolve) => setTimeout(resolve, behavior.latencyMs));

  if (behavior.shouldFail) {
    throw new Error(`Failed to update ${productId}`);
  }

  return true;
};
