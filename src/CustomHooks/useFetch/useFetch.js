import { useCallback } from 'react';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Функция для выполнения запроса
  const fetchData = async(url, params = {}) => {
    setIsLoading(true);
    setError(null);

    const urlFetch = new URL(url)
      if (params.params) {   
      for(const key in params.params) {
        urlFetch.searchParams.set(key.toString(), params.params[key].toString())      
      }
    }
    try {
      const response = await fetch(urlFetch);

      const result = await response.json();
      setData(result)
    } catch (error) {
        setError(error)
    } finally {
      setIsLoading(false)
    }
  }

useEffect(() => {
  fetchData(url)
},[url])

const refetch = (params) => {
  console.log(params)
  fetchData(url, params)
}

  return { data, isLoading, error, refetch}
}

export default useFetch;

