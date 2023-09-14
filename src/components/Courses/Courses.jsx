import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="md:w-2/3">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;