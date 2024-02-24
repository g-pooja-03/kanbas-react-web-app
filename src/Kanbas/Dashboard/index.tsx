import React from "react";
import { Link } from "react-router-dom";
import courses from "../Database/courses.json";

function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>              <hr />
            <h2>Published Courses (12)</h2> <hr />
            <div className="row">
                <div style={{display: 'flex', overflowX: 'auto', marginTop: '20px'}}>
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{width: 300}}>
                            <div className="card">
                                <img src={require('./classlogo.png')} className="card-img-top"
                                     style={{height: 150}}/>
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                          style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                        {course.name} </Link>
                                    <p className="card-text">{course.name}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                        Go </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;