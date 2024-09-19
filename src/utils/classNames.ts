export const classNames = (arr: (string | null | undefined)[]) =>
  arr.filter((item) => !!item).join(' ');
