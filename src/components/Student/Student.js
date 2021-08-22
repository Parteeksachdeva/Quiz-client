import React, {useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../../axios'
import CourseCard from '../CourseCard/CourseCard'
import Quiz from '../Quiz/Quiz'
import "./Student.css"
function Student() {
    const [Courses, setCourses] = useState([])
    let history=useHistory()
    useEffect(() => {
        if(!localStorage.getItem("token")) history.push("/studentlogin")
        axios.get("/courses")
        .then(res=>{
            setCourses(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div className="student__main">
            {localStorage.getItem("token") && <h1>Available Courses</h1>}
            {localStorage.getItem("token") &&
            <div className="student">
            { Courses.map((data,i)=>(
                <CourseCard key={i} arr={data} index={i}/>
            ))
            }
            </div>}
        </div>
    )
}

export default Student
