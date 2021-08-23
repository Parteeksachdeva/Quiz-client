import React from 'react'
import "./Home.css"
import studentImg from '../../images/student-male.png'
import teacherImg from '../../images/teacher.png'
import { useHistory } from 'react-router-dom'

function Home() {
    let history = useHistory()

    function handleClick(){
        history.push("/studentlogin")
    }
    function handleClick2(){
        history.push("/teacherlogin")
    }
    return (
        <div className="home">
            <h1>Who are you?</h1>
            <div className="home__options">
                <div onClick={handleClick}>
                    <img src={studentImg} alt="student-img"/>
                    <h2>Student</h2>
                    
                </div>
                <div onClick={handleClick2}>
                    <img src={teacherImg} alt="teacher-img"/>
                    <h2>Teacher</h2>
                </div>
            </div>
        </div>
    )
}

export default Home
