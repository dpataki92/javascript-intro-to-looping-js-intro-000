function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    i === 1 ? array.push(`I am 1 strange loop.`) : array.push(`I am ${i} strange loops.`);
}
  return array;
}

function whileLoop (num) {

  while (num > 0) {
  console.log(--num);
  }

  return 'done';
}

function doWhileLoop (num) {

  function incrementVariable(i) {
    i = i + 1;
  }

  do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
}
