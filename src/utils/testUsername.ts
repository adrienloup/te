export function testUsername(value: string) {
  return /^[A-Za-z]{3,10}$/.test(value);
}
