// curry function

const curryFn = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log(curryFn(10)(30));
