import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../../axios';
import CourseCard from '../CourseCard/CourseCard';
import "./Teacher.css"
function Teacher() {
    const [Courses, setCourses] = useState([])
    useEffect(() => {
        if(!localStorage.getItem("token")) history.push("/teacherlogin")
        axios.get("/courses")
        .then(res=>{
            setCourses(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    let history = useHistory();
    function addNew(){
        var CourseName = prompt("Please enter Course Name");
        axios.post("/courses",{CourseName})
        .then(res=>{
            history.push("/createquiz")
        })
        .catch(err=>{console.log(err)})
        
    }
    function logout(){
        localStorage.removeItem('token');
        history.push("teacherlogin")
    }
    return (
        <div className="student__main">
             <div className="buttons">
                    <button onClick={logout}>Logout</button>
            </div>
            <h1>Available Courses</h1>
            <div className="student">
            { Courses.map((data,i)=>(
                <CourseCard key={i} arr={data} index={i} teacher={true}/>
            ))
            }
            </div>
            <button onClick={addNew}>Create New Course</button>
    </div>
    )
}

export default Teacher
