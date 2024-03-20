import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../store";
function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <>
            <div className="button-container">
                <button className="gray-button">Collapse All</button>
                <button className="gray-button">View Progress</button>
                <select className="form-control">
                    <option>Publish All</option>
                    <option>Publish All Modules and Items</option>
                    <option>Publish Modules only</option>
                    <option>UnPublish All Modules</option>
                </select>
                <button className="red-button">+ Module</button>
            </div>
            <br/>

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div className="parent">
                    <button className="red-but"
                        onClick={() => dispatch(addModule({...module, course: courseId}))}>
                        Add
                    </button>
                    <button className="red-but"
                        onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                    <input className="form-control"
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({...module, name: e.target.value}))
                        }/>
                    <textarea className="area"
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({...module, description: e.target.value}))
                        }/>
                    </div>
                </li>
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item">
                            <button className="slim-gray-but"
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                            <button className="slim-gray-but"
                                onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
                            <div>
                                <FaEllipsisV className="me-2"/>
                                {module.name}
                                <span className="float-end">
                                <FaCheckCircle className="text-success"/>
                                <FaPlusCircle className="ms-2"/>
                                <FaEllipsisV className="ms-2"/>
                                <p>{module.description}</p>

                            </span>
                            </div>
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default ModuleList;