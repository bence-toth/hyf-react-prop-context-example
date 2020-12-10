import GreatGrandChild from './GreatGrandChild'

const GrandChild = ({setCounter}) => {
    return (
        <div>
            <p>Hi I am GrandChild</p>
            <GreatGrandChild setCounter={setCounter} />
        </div>
    );
}

export default GrandChild