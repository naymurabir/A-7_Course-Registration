import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Course from "../Course/Course";


const Courses = ({ handleAddToBookMarks }) => {

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
                    courses.map(course => <Course key={course.id} course={course} handleAddToBookMarks={handleAddToBookMarks}></Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleAddToBookMarks: PropTypes.func.isRequired
}


export default Courses;