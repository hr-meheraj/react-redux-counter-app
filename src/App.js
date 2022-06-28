import Counter from "./components/Counter";
import { useSelector } from 'react-redux'
function App() {
  const count = useSelector(store => store.count)
  return (
    <div className='container'>
      <p> <code>App.js</code> file counter : {count}</p>
      <Counter/>
    </div>
  );
}

export default App;

