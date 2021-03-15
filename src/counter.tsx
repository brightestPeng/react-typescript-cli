import React, { useEffect, useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = setInterval(() => {
      setCount((num) => num + 1);
    }, 500);

    return () => {
      clearInterval(timer as NodeJS.Timeout);
      timer = null;
    };
  }, []);

  return <div>{count}</div>;
};

export default Counter;
