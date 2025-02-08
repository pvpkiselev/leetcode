function easyDebounce(func, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function hardDebounce(func, delay, options = {}) {
  let timeoutId;
  const { leading = false } = options;

  function debounced(...args) {
    const shouldCallNow = leading && !timeoutId;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;

      if (leading) {
        func.apply(this, args);
      }
    }, delay);

    if (shouldCallNow) {
      func.apply(this, args);
    }
  }

  debounced.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  debounced.flush = () => {
    if (timeoutId) {
      func.apply(this, args);
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounced;
}
