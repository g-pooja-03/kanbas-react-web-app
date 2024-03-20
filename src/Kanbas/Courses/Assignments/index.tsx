import React from "react";
import "./index.css";
import {FaCheckCircle, FaEllipsisV, FaPlusCircle} from "react-icons/fa";
import {Link, useParams} from "react-router-dom";
import {assignments} from "../../Database";

function Assignments() {
    const {courseId} = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
            <div className="row">
                <div className="col">
                    <tr>
                        <div>
                            <h2>Assignments</h2>
                        </div>
                        <div className="button-container">
                           <input placeholder="Search for Assignments"/>
                            <button className="gray-button">+ Group</button>
                            <button className="gray-button">+ Assignment</button>
                            <select className="form-control">
                                <option>Edit Assignment Dates</option>
                                <option>Assignment group weights</option>
                            </select>
                        </div>
                    </tr>
                </div>

                <div className="col">
                    <ul className="list-group wd-modules">
                        <li className="list-group-item">
                            <div>
                                <FaEllipsisV className="me-2"/> ASSIGNMENTS
                                <span className="float-end">
                  <FaCheckCircle className="text-success"/>
                  <FaPlusCircle className="ms-2"/><FaEllipsisV className="ms-2"/>
           npm st       </span>
                            </div>
                            <ul className="list-group">
                                {assignmentList.map((assignment) => (
                                    <li className="list-group-item">
                                        <FaEllipsisV className="me-2"/>
                                        <Link
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                        <span className="float-end">
                      <FaCheckCircle className="text-success"/><FaEllipsisV className="ms-2"/></span>
                                    </li>))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default Assignments;