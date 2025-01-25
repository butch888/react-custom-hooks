import { useEffect, useState } from 'react';

function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
}

export function useWindowScroll() {
  const [width, setWidth] = useState()
  const [height, setHeight] =useState()
  
  useWindowEvent('scroll', () => {
    console.log(width, height)
    if (typeof window !== 'undefined') {
      const w = window.pageXOffset
      const h = window.pageYOffset
      setWidth(w)
      setHeight(h)
    }
  })
  
  const scroll = {x: width, y: height}

  const scrollTo = (obj) => {
    window.scrollTo({
      top: obj.y,
      behavior: 'smooth'
    })
  }
 
  return [scroll, scrollTo]
}
