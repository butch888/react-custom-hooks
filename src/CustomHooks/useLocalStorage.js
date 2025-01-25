import { useState } from "react"

const useLocalStorage = (key) => {

  const [value, setValue] = useState(localStorage.getItem(key))
 

  const setItem =(value) => {
    setValue(value)
    localStorage.setItem(key, value)
  }
  const removeItem = () => {
    setValue('')
    localStorage.removeItem(key)
  }
  return [value, {setItem, removeItem}]
}

export default useLocalStorage;