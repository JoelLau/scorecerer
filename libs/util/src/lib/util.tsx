export const cleanClasses = (...str: string[]): string => {
  const rawClasses = str.join(' ').split(' ');
  const obj = rawClasses.reduce((prev, curr) => {
    const trimmed = curr.trim();
    prev[trimmed] = undefined;
    return prev;
  }, {} as { [key: string]: undefined });

  const uniqueClasses = Object.keys(obj);
  return uniqueClasses.join(' ');
};
