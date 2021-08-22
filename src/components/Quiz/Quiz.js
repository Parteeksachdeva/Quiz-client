import React,{useState,useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from '../../axios'
import "./Quiz.css"
function Quiz({teacher}) {
    const id=useParams()
    const i=id?.id;
    const [questions, setQuestions] = useState([{}])
    const [answers,setAnswer] = useState({
        A:false,
        B:false,
        C:false,
        D:false,
    });
    const [score, setScore] = useState(0)
    useEffect(() => {
        axios.get("/courses")
        .then(res=>{
            setQuestions(res.data[i]?.questions)
            console.log(res.data[i]?.questions)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    
    const [index, setIndex] = useState(0)
    let history = useHistory()
    function shallowEqual(object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
      
        if (keys1.length !== keys2.length) {
          return false;
        }
      
        for (let key of keys1) {
          if (object1[key] !== object2[key]) {
            return false;
          }
        }
      
        return true;
      }
    function handleClick(){
        const check=document.getElementsByClassName("checkbox");
        check[0].checked=false
        check[1].checked=false
        check[2].checked=false
        check[3].checked=false
        setAnswer(
            {A:false,
            B:false,
            C:false,
            D:false,}
        )
        if(shallowEqual(questions[index]?.answers, answers)){
            setScore(score+1);
        }
        if(index+1===questions.length){
            shallowEqual(questions[index]?.answers, answers) ? 
            alert(`Quiz Completed, Your Score is ${score+1}`)
            : alert(`Quiz Completed, Your Score is ${score}`)
            history.push("/student")
            
        }
        else setIndex(index+1);

    }
    function handleChange(e){
        setAnswer({...answers,[e.target.name]:e.target.checked})
    }
    return (
        <div className="quiz">
            <p className="quiz__score">Score: {score}/{questions.length}</p>
            <div className="quiz__main">
                <div>
                    <label><b>Q{index+1}:</b></label>
                    <p>{questions[index]?.question}</p>
                    
                </div>
                    
                <div>
                    <input name="A" onClick={handleChange} type="checkbox" className="checkbox"/>
                    <p>{questions[index]?.A}</p>
                </div>

                <div>
                    <input name="B" type="checkbox" onClick={handleChange}   className="checkbox"/>
                <p>{questions[index]?.B}</p>
                </div>
                <div>
                    <input name="C" type="checkbox" onClick={handleChange}  className="checkbox"/>
                <p>{questions[index]?.C}</p>
                </div>
                <div>
                    <input name="D" type="checkbox" onClick={handleChange}  className="checkbox"/>
                    <p>{questions[index]?.D}</p>
                </div>
                    
                <button onClick={handleClick}>Next</button>
            </div>
        </div>
    )
}
export default Quiz
