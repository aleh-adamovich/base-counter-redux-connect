const inc = () => ({
  type: 'INC'
});

const rnd = () => {
  const randomValue = Math.ceil(Math.random() * 5);

  return {
    type: 'RND',
    payload: randomValue,
  }
};

export {
  inc,
  rnd,
}
