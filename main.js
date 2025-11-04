/* Stampa in Console*/
for (let i = 1; i <= 100; i++) {
  let msg = i;

  if (i % 3 == 0 && i % 5 == 0) {
    msg = 'FizzBuzz';
  } else if (i % 3 == 0) {
    msg = 'Fizz';
  } else if (i % 5 == 0) {
    msg = 'Buzz';
  }

  console.log(msg);
}
