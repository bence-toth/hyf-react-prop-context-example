import {useState, createContext} from 'react'

import Child1 from './Child1'
import Child2 from './Child2'

const counterStartsFrom = 0

const CounterContext = createContext(null);

const App = () => {
  const [counter, setCounter] = useState(counterStartsFrom)
  return (
    <div className="App">
      <p>Hi I am App</p>
      <CounterContext.Provider value={{
        counter,
        setCounter
      }}>
        <Child1 />
      </CounterContext.Provider>
      <Child2 counter={counter} />
    </div>
  );
}

export default App;

export {CounterContext}

// App
  // Child1
    // GrandChild
      // GreatGrandChild
  // Child2