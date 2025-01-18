import { useState, useEffect } from 'react';

const useFetch = (url,) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  // Функция для выполнения запроса
  const fetchData = async() => {
    setIsLoading(true);
      setError(null);

    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result)
    } catch (error) {
        setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  fetchData()
},[url])

  return { data, isLoading, error}
}

export default useFetch;

