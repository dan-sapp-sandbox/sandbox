import { useEffect, useRef, useState } from "react";

const debounce = (fn: (...args: any[]) => void, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

export const useResizeObserver = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(
      debounce(([entry]) => {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }, 100),
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, size };
};
