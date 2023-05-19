import { useState, useEffect } from "react";

function getStoredValue(key, initialValue) {
  const storedValue = JSON.parse(localStorage.getItem(key));
  if (storedValue) return storedValue;

  if (savedValue instanceof Function) return initialValue();
  return initialValue;
}

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getStoredValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
