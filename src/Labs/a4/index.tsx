import React, {useState} from "react";
import ReduxExamples from "./ReduxExamples";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import TodoList from "./ReduxExamples/todos/TodoList";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    let [counter, setCounter] = useState(3);
    return(
        <>
            <h1>Assignment 4</h1>
            <TodoList />
            <ReduxExamples/>
            < ClickEvent />
            < PassingDataOnEvent />
            < PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ChildStateComponent counter={counter} setCounter={setCounter} />

        </>
    );
};
export default Assignment4;