Looping a triangle
for (var line = "#"; line.length < 8; line += "#")
console.log(line);

FizzBuzz
for (var number = 1; number <= 100; number = number + 1)
  if(number % 3 === 0  && number % 5 === 0)
     console.log('FizzBuzz');
  else if (number % 3 === 0)
    console.log('Fizz');
  else if(number % 5 === 0)
    console.log('Buzz');
  else
    console.log(number);

    Chess Board
    var size = 8;
var chess = '';
for (var line = 0; line < size; line ++) {
  for (var column = 0; column < size; column ++) {
    if ((column+line) % 2 === 0)
      chess += ' ';
    else
      chess += '#';
  }
  chess += '\n';
}
console.log(chess) 
