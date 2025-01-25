import { useEffect, useState } from 'react';

export function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
}

export function useViewportSize() {
  const [width, setWidth] = useState()
  const [height, setHeight] =useState()

  useWindowEvent('resize', () => {
    console.log(width, height)
    if (typeof window !== 'undefined') {
      const w = window.innerWidth
      const h = window.innerHeight
      setWidth(w)
      setHeight(h)
      console.log(width, height)
    }
  }, true)
  return { width, height }
}

