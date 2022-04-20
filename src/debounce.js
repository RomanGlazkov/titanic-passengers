export const debounce = (fn, delay) => {
  let inDebounce = null;

  return (args) => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => fn(args), delay);
  };
};
