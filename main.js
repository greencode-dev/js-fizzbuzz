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

/* Stampa in HTML*/
for (let i = 1; i <= 100; i++) {
  let contenuto = i;

  if (i % 3 == 0 && i % 5 == 0) {
    contenuto = `FizzBuzz`;
  } else if (i % 3 == 0) {
    contenuto = `Fizz`;
  } else if (i % 5 == 0) {
    contenuto = `Buzz`;
  }

  document.getElementById('risultato').innerHTML += `<li>${contenuto}</li>`;
}
