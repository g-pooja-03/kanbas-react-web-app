function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    const todo = {
        id: 1,
        title: "Buy Milk",
        completed: false,
        assignees: ["John", "Jane"],
    };
    return (
        <>
            <h2>JSON Stringify</h2>
            squares = {JSON.stringify(squares)}
            <br />
            squares = {squares}
            <br />
            todo =<pre>{JSON.stringify(todo, null, 2)}</pre>
        </>
    );
}
export default JsonStringify;