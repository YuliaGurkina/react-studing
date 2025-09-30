import { useFetch, useLocalStorage, useHover, useViewportSize } from "./hooks";
import "./App.css";

function Demo() {
  const {
      data,
      isLoading,
      error,
      refetch
    } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [value, { setItem, removeItem }] = useLocalStorage('some-key');
  const { hovered, ref } = useHover();
  const { height, width } = useViewportSize();



  return (
    <>
      <div>
        <div>
          <h1>useFetch</h1>
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
        {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
      </div>
      <hr/>
      <div>
        <h1>useLocalStorage</h1>
        <div>
          <p>Значение из LocalStorage: {value}</p>
          <div>
            <button onClick={() => setItem('new storage value')}>Задать значение</button>
            <button onClick={() => removeItem()}>Удалить значение</button>
          </div>
        </div>
      </div>
      <hr/>
      <div>
        <h1>useHover</h1>
         <div ref={ref}>
          {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
      </div>
      <hr/>
      <div>
        <h1>useViewportSize</h1>
        <div>   Width: {width}, height: {height}</div>
      </div>
    </>
  );


}export default Demo;