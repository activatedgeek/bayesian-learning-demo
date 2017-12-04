/* Hypotheses generator functions */
const isOdd = (x) => (x % 2 === 1);

const isMultipleOf = (n) => (x) => (x % n === 0);

const endsIn = (n) => (x) => (x % 10 === n);

const isPowerOf = (n) => (x) => {
  const lg = Math.log(x) / Math.log(n);
  return Math.abs(lg - Math.floor(lg)) <= 1e-6;
};

const isSquare = (x) => {
  const r = Math.floor(Math.sqrt(x));
  return x === r * r;
};

const isPowerOf2Minus32 = (x) => {
  return x !== 32 && isPowerOf(2)(x);
};

const isPowerOf2Plus37 = (x) => {
  return x === 37 || isPowerOf(2)(x);
};

/* Raw hypotheses */
const rawHypotheses = [
  {title: 'even', h: isMultipleOf(2), raw_prior: 0.5},
  {title: 'odd', h: isOdd, raw_prior: 0.5},
  {title: 'squares', h: isSquare, raw_prior: 0.2},

  {title: 'mult of 3', h: isMultipleOf(3), raw_prior: 0.2},
  {title: 'mult of 4', h: isMultipleOf(4), raw_prior: 0.2},
  {title: 'mult of 5', h: isMultipleOf(5), raw_prior: 0.2},
  {title: 'mult of 6', h: isMultipleOf(6), raw_prior: 0.2},
  {title: 'mult of 7', h: isMultipleOf(7), raw_prior: 0.2},
  {title: 'mult of 8', h: isMultipleOf(8), raw_prior: 0.2},
  {title: 'mult of 9', h: isMultipleOf(9), raw_prior: 0.2},
  {title: 'mult of 10', h: isMultipleOf(10), raw_prior: 0.2},

  {title: 'ends in 0', h: endsIn(0), raw_prior: 0.2},
  {title: 'ends in 1', h: endsIn(1), raw_prior: 0.2},
  {title: 'ends in 2', h: endsIn(2), raw_prior: 0.2},
  {title: 'ends in 3', h: endsIn(3), raw_prior: 0.2},
  {title: 'ends in 4', h: endsIn(4), raw_prior: 0.2},
  {title: 'ends in 5', h: endsIn(5), raw_prior: 0.2},
  {title: 'ends in 6', h: endsIn(6), raw_prior: 0.2},
  {title: 'ends in 7', h: endsIn(7), raw_prior: 0.2},
  {title: 'ends in 8', h: endsIn(8), raw_prior: 0.2},
  {title: 'ends in 9', h: endsIn(9), raw_prior: 0.2},

  {title: 'powers of 2', h: isPowerOf(2), raw_prior: 0.2},
  {title: 'powers of 3', h: isPowerOf(3), raw_prior: 0.2},
  {title: 'powers of 4', h: isPowerOf(4), raw_prior: 0.2},
  {title: 'powers of 5', h: isPowerOf(5), raw_prior: 0.2},
  {title: 'powers of 6', h: isPowerOf(6), raw_prior: 0.2},
  {title: 'powers of 7', h: isPowerOf(7), raw_prior: 0.2},
  {title: 'powers of 8', h: isPowerOf(8), raw_prior: 0.2},
  {title: 'powers of 9', h: isPowerOf(9), raw_prior: 0.2},

  {title: 'powers of 2 - {32}', h: isPowerOf2Minus32, raw_prior: 0.05},
  {title: 'powers of 2 + {37}', h: isPowerOf2Plus37, raw_prior: 0.05},

  {title: 'all', h: () => true, raw_prior: 0.25}
];

/* Compute normalization for the priors */
const raw_prior_sum = rawHypotheses.map(({raw_prior}) => raw_prior)
  .reduce((x, y) => x + y, 0);

/* Check whether data list completely satisfies hypothesis h */
const isExtension = (data, h) =>
  data.length === data.filter(h).length;

/* Hypothesis generator function */
const getHypotheses = (data, a, b) => {
  const numberList = [];
  for (let i = a; i <= b; ++i) {
    numberList.push(i);
  }

  const hypotheses = rawHypotheses.map(({title, h, raw_prior}) => {
    const likelihood = isExtension(data, h) ?
      1.0 / Math.pow(numberList.filter(h).length, data.length) : 0.0;
    const prior = raw_prior / raw_prior_sum;
    const posterior = likelihood * prior;
    return {
      title,
      likelihood,
      prior,
      posterior
    }}
  );

  const evidenceSum = hypotheses.map(({posterior}) => posterior).reduce((x,y)=>x+y);
  return hypotheses.map(({posterior, ...others}) => ({
    ...others,
    posterior: posterior / evidenceSum
  }));
};

export {isMultipleOf, endsIn, isPowerOf, isSquare, isPowerOf2Minus32, isPowerOf2Plus37};
export default getHypotheses;

