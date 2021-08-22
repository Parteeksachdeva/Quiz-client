import React from 'react'
import "./CourseCard.css"
import { useHistory } from 'react-router-dom'

function CourseCard({arr,index,teacher}) {
    let history = useHistory()
    function handleClick(){
        history.push(`/quiz/${index}`)
    }
    function handleClickEdit(){
        history.push(`/createquiz/${index}`)
    }
    return (
        <div className="card">
            <p>{arr?.CourseName}</p>
            <div>
            
            {teacher ? <button onClick={handleClickEdit}>Edit</button>:<button onClick={handleClick}>Take Quiz</button>}
            </div>
        </div>
    )
}

export default CourseCard
