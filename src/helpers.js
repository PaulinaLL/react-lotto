function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumbers(num) {
  let counter = 0;
  let array = [];
  while (counter < num) {
    let random = getRandomNum(1, 50);
    counter++;
    if (array.indexOf(random) === -1) {
      array.push(random);
    } else counter--;
  }
  return array;
}

export { getRandomNum, getRandomNumbers };
