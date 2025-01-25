import { useState } from "react";
import useFetch from "./useFetch";

function UseFetchDemo() {
  const [inpValue, setInpValue] = useState('')

  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
	
  return (
    <div>
      <div>
        <input type="number" onChange={(e) => setInpValue(e.target.value)}/>
        <button onClick={() => refetch({
          params: {
            _limit: inpValue, _page: 1
          }
        })}>
          Перезапросить
        </button>
      </div>
      {isLoading ? 'Загрузка...' : data?.map(item => <div key={item.id}>{item.id}</div>) }
      {error && 'Произошла ошибка'}
    </div>
  );
}

export default UseFetchDemo