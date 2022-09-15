const FibonacciOutput = ({ nth_term }) => {
  console.log(nth_term);

  let sqr_five = Math.sqrt(5);
  let phi_big = (1 + sqr_five) / 2;
  let phi_small = (1 - sqr_five) / 2;

  let step1 = Math.pow(phi_big, nth_term);
  let step2 = Math.pow(phi_small, nth_term);

  let answer = (step1 - step2) / sqr_five;
  answer = Math.round(answer);

  return <p>{answer}</p>;
};

export default FibonacciOutput;
