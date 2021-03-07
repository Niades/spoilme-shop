function choice(array) {
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = {
  choice,
};
