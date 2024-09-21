export function delayFallback<P>(promise: Promise<P>, duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  }).then(() => promise);
}
