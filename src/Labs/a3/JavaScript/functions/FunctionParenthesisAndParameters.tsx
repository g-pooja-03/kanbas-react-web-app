const square = (a: number) => {
    const c = a * a;
    return c;
};

const plusOne = (a: number) => {
    const c = a + 1;
    return c;
};

function FunctionParenthesisAndParameters() {
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <>
            <h3>Parenthesis And Parameters</h3>
            twoSquared = {twoSquared}
            <br />
            square(2) = {square(2)}
            <br />
            threePlusOne = {threePlusOne}
            <br />
            plusOne(3) = {plusOne(3)}
            <br />
        </>
    );
}

export default FunctionParenthesisAndParameters;