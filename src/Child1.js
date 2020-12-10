import GrandChild from './GrandChild'

const Child1 = () => {
    return (
        <div>
            <p>Hi I am Child 1</p>
            <GrandChild />
        </div>
    );
}

export default Child1