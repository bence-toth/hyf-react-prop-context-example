import {useState} from 'react'

import Child1 from './Child1'
import Child2 from './Child2'

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
        <p>Hi I am App</p>
        <Child1 counter={counter} setCounter={setCounter} />
        <Child2 counter={counter} />
    </div>
  );
}

export default App;

// App
  // Child1
    // GrandChild
      // GreatGrandChild
  // Child2