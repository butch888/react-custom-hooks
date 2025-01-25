import { useState } from "react"

const useToggle = (arr) => {

  const [value, setValue] = useState(arr[0])
  const[count, setCount] = useState(1)

  const toggle = (col) => {
    if (col) {
      setValue(col)  
    } else if (count < arr.length) {
      setValue(arr[count])
      setCount(prev => prev + 1)
    } else {
      setCount(1)
      setValue(arr[0])
    }
  }

  const set = (color) => {
    setValue(color)
  }


  return [value, {toggle, set}]
}

export default useToggle;