import courses from "../Database/courses.json";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "../Modules";
import Home from "./Home";
import Assignments from "./Assignments";
function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <h1><HiMiniBars3 /> Course {course?.name}</h1>
            <div style={{display: 'flex', overflowX: 'auto', marginTop: '20px'}}>
                <CourseNavigation />
                    <Routes>
                        <Route path="/" element={<Navigate to="Home"/>}/>
                        <Route path="Home" element={<Home/>}/>
                        <Route path="Modules" element={<Modules/>}/>
                        <Route path="Assignments" element={<Assignments/>}/>
                        <Route path="Piazza" element={<h1>Piazza</h1>}/>
                        <Route path="Assignments" element={<h1>Assignments</h1>}/>
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>}/>
                        <Route path="Grades" element={<h1>Grades</h1>}/>
                        <Route path="People" element={<h1>People</h1>}/>
                    </Routes>
            </div>
        </div>
    );
}

export default Courses;