import GreatGrandChild from './GreatGrandChild'

const GrandChild = () => {
    return (
        <div>
            <p>Hi I am GrandChild</p>
            <GreatGrandChild />
        </div>
    );
}

export default GrandChild