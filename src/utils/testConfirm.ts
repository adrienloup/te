export function testConfirm(password: string, confirm: string) {
  return confirm !== '' && password === confirm;
}
