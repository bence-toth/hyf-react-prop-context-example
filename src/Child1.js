import GrandChild from './GrandChild'

const Child1 = ({setCounter}) => {
    return (
        <div>
            <p>Hi I am Child 1</p>
            <GrandChild setCounter={setCounter} />
        </div>
    );
}

export default Child1