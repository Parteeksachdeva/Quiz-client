import React from 'react'
import { useHistory } from 'react-router-dom'
import Quiz from '../Quiz/Quiz';
import "./Teacher.css"
function Teacher() {
    let history = useHistory();
    function handleClick(){
        history.push("/createquiz");
    }
    return (
        <div>
            {false?
            <button onClick={handleClick}>Create Quiz</button>
            :<Quiz teacher={true}/>
            }
        </div>
    )
}

export default Teacher
