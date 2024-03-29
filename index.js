

const receivesAFunction = (callback) => {
  callback();
};

const returnsANamedFunction = () => {
  const namedFunction = function myNamedFunction() {
    helpers.doSomething();
  };
  return namedFunction;
};

const returnsAnAnonymousFunction = () => {
  const anonymousFunction = function () {
    helpers.doSomething();
  };
  return anonymousFunction;
};

