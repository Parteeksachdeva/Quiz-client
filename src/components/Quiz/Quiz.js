import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import "./Quiz.css"
function Quiz({teacher}) {
    const [arr, setArr] = useState([{
        question: "Question 1",
        option1: "option1",
        option2: "option2",
        option3: "option3",
        option4: "option4",
    },{
        question: "Question 2",
        option1: "option1fefw",
        option2: "option2",
        option3: "option3",
        option4: "option4",
    },{
        question: "Question 3",
        option1: "option1fewf",
        option2: "option2",
        option3: "option3",
        option4: "option4",
    }])
    const [index, setIndex] = useState(0)
    const [Edit, setEdit] = useState(false)
    let history = useHistory()
    function handleClick(){
        setEdit(!Edit)
    }
    function handleChange(e){
        console.log(e.target.checked)
    }
    return (
        <div className="quiz">
            <p>Questions:-</p>
            <div>
                <label>Q</label>
                <p>{arr[index].question}</p>
               {teacher ? <button onClick={handleClick}>{Edit ? "UnEdit" : "Edit"}</button> :
               <p>Score 0/10</p>}
            </div>
                
            <div>
                <input onClick={handleChange} type="checkbox" />
                {Edit ? <input /> : <p>{arr[index].option1}</p>}
            </div>

            <div>
                <input type="checkbox" />
                {Edit ? <input /> : <p>{arr[index].option1}</p>}
            </div>
            <div>
                <input type="checkbox" />
                {Edit ? <input /> : <p>{arr[index].option1}</p>}
            </div>
            <div>
                <input type="checkbox" />
                {Edit ? <input /> : <p>{arr[index].option1}</p>}
            </div>
                
            <button onClick={()=>{setIndex(index+1)}}>Next</button>
        </div>
    )
}
export default Quiz
