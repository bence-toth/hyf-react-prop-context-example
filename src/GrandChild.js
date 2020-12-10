import GreatGrandChild from './GreatGrandChild'

const GrandChild = ({counter, setCounter}) => {
    return (
        <div>
            <p>Hi I am GrandChild</p>
            <GreatGrandChild counter={counter} setCounter={setCounter} />
        </div>
    );
}

export default GrandChild