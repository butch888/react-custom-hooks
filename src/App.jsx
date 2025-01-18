import './App.css';
import  useFetch  from './CustomHooks/useFetch';

function Demo() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
	
  return (
    <div>
      <div>
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data.map(item => <div key={item.id}>{item.id}</div>) }
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>Title</h1>
      <Demo/>
    </div>
  )
}

export default App;
