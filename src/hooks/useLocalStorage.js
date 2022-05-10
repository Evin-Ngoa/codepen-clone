import { useEffect, useState } from "react";

const PREFIX = "codepen-storage";

const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;
  const [val, setVal] = useState(() => {
      const jsonVal = localStorage.getItem(prefixedKey);
      if(jsonVal != null) return JSON.parse(jsonVal);

      if(typeof initialValue === 'function') {
          return initialValue()
      } else {
          return initialValue
      }
  })

  useEffect(() => {
      localStorage.setItem(prefixedKey, JSON.stringify(val))
  }, [prefixedKey, val])

  return [val, setVal];
};

export default useLocalStorage;
