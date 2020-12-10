const GreatGrandChild = ({counter, setCounter}) => {
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