import { useRef, useEffect, useState } from 'react';

export const useHover = () => {
  const [hovered, setHovered] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    ref.current.addEventListener('mouseover', () => {
      setHovered(true)
    })

    ref.current.addEventListener('mouseout', () => {
      setHovered(false)
    })

  },[])

  return { hovered, ref }
}