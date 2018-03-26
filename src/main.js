const fizzBuzz = (number) => {
  if(number === 0) return number;
  if(number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if(number % 3 === 0) return 'Fizz';
  if(number % 5 === 0) return 'Buzz';
  // otherwise
  return number;
}

function foo(){
  return 'bla';
}

export {fizzBuzz}
