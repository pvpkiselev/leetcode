import { useEffect, useState } from 'react';

const printInConsole = (value) => {
  console.log(value);
};

const useDebounce = (value, time) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [value, time]);

  return debouncedValue;
};

function App({ initialValue = '', onSave = printInConsole }) {
  const [value, setValue] = useState(initialValue);
  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    if (debouncedValue !== initialValue) {
      onSave(debouncedValue);
    }
  }, [debouncedValue, initialValue, onSave]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input value={value} onChange={handleChange} type="text" />
    </>
  );
}

export default App;
