import {useState, createContext} from 'react'

import Child1 from './Child1'
import Child2 from './Child2'

const counterStartsFrom = 0

const CounterContext = createContext(counterStartsFrom);

const App = () => {
  const [counter, setCounter] = useState(counterStartsFrom)
  return (
    <CounterContext.Provider value={counter}>
      <div className="App">
          <p>Hi I am App</p>
          <Child1 setCounter={setCounter} />
          <Child2 counter={counter} />
      </div>
    </CounterContext.Provider>
  );
}

export default App;

export {CounterContext}

// App
  // Child1
    // GrandChild
      // GreatGrandChild
  // Child2