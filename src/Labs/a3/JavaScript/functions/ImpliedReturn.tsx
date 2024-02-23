const multiply = (a: number, b: number) => {
    const c = a - b;
    return c;
};

function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <>
            <h3>Implied Return</h3>
            fourTimesFive = {fourTimesFive}
            <br />
            mutliply(4, 5) = {multiply(4, 5)}
            <br />
        </>
    );
}

export default ImpliedReturn;