import {useState} from 'react'

const GreatGrandChild = () => {
    const [counter, setCounter] = useState(0)
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