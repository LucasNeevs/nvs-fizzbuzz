export default (v: number): string => {
  if (v === 0) return 'Zero';
  if (v % 3 === 0 && v % 5 === 0) return 'FizzBuzz';
  if (v % 3 === 0) return 'Fizz';
  if (v % 5 === 0) return 'Buzz';
  return 'Unfibuzzed';
};
