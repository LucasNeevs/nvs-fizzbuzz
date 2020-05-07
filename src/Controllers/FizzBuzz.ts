export default (v: number): string => {
  if (v === 0) return 'Zero';
  else if (v % 3 === 0 && v % 5 === 0) return 'FizzBuzz';
  else if (v % 3 === 0) return 'Fizz';
  else if (v % 5 === 0) return 'Buzz';
  return 'Unfibuzzed';
}