import GrandChild from './GrandChild'

const Child1 = ({counter, setCounter}) => {
    return (
        <div>
            <p>Hi I am Child 1</p>
            <GrandChild counter={counter} setCounter={setCounter} />
        </div>
    );
}

export default Child1