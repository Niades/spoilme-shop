function createLogger(name) {
  return function() { 
    console.log.apply(null, [`[${name}]`, ...arguments]); 
  };
}

module.exports = {
  createLogger,
};