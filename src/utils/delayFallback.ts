export function delayFallback<T>(promise: Promise<T>, duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  }).then(() => promise);
}
