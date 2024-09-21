export function testPassword(value: string) {
  return /^[A-Za-z0-9]{3,10}$/.test(value);
}
