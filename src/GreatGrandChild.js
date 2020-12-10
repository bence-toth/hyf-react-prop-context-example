import {useContext} from 'react'
import {CounterContext} from './App'

const GreatGrandChild = () => {
    const {counter, setCounter} = useContext(CounterContext);
    return (
        <div>
            <p>Hi I am GreatGrandChild</p>
            <p>The counter is currently {counter}</p>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>
                Increase counter
            </button>
        </div>
    );
}

export default GreatGrandChild