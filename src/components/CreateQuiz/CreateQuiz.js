import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../axios';
import "./CreateQuiz.css"

function CreateQuiz() {
    const id=useParams()
    const i=id?.id;
    console.log("jhcbwehjv",i)
    const [obj, setObj] = useState({
        question: "",
        A:"",
        B:"",
        C:"",
        D:"",
        answers:{
        A:false,
        B:false,
        C:false,
        D:false,
        }
    })
    function handleChange(e){
        setObj({...obj,[e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(obj?.question)
        if(obj?.question.trim()==="" && obj?.A.trim()==="" && obj?.B.trim()==="" && obj?.C.trim()==="" && obj?.D.trim()===""){
            alert("Fields Can't be Empty")
            return;
        }
        if(obj?.answers?.A===false && obj?.answers?.B===false && obj?.answers?.C===false && obj?.answers?.D===false){
            alert("Give Answer by ticking checkbox")
            return;
        }
        
        axios.get("/courses")
        .then(res=>{
            let course;
            if(i>=0 && i<=res.data.length-1) course=res.data[i] 
            else course=res.data[res.data.length-1] 
            course.questions.push(obj)
            const check=document.getElementsByClassName("checkbox");
            check[0].checked=false
            check[1].checked=false
            check[2].checked=false
            check[3].checked=false
            axios.post("/courses/update",course)
            .then(res=>{
                alert("Question Added")
                const input=document.getElementsByClassName("input");
                input[0].value=""
                input[1].value=""
                input[2].value=""
                input[3].value=""
                input[4].value=""
                setObj({
                    question: "",
                    A:"",
                    B:"",
                    C:"",
                    D:"",
                    answers:{
                    A:false,
                    B:false,
                    C:false,
                    D:false,
                    }
                })
            })
            .catch(err=>{
                console.log(err)
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    function handleAnswerChange(e){
        let a = obj?.answers;
        a={...a,[e.target.name]:e.target.checked}
        setObj({...obj,answers:a})
    }
    return (
        <div className="createquiz">
            {i ? <h1>Update Your Whole Quiz</h1>:<h1>Add Questions in quiz</h1>}
            <div className="createquiz__main">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Q</label>
                        <input name="question" onChange={handleChange} className="input"/>
                    </div>
                    
                    <div>
                        <input name="A" onClick={handleAnswerChange} type="checkbox" className="checkbox"/>
                        <input name="A" onChange={handleChange} className="input"/>
                    </div>

                    <div>
                        <input name="B" onClick={handleAnswerChange} type="checkbox" className="checkbox"/>
                        <input name="B" onChange={handleChange} className="input"/>
                    </div>
                    <div>
                        <input name="C" onClick={handleAnswerChange} type="checkbox" className="checkbox"/>
                        <input name="C" onChange={handleChange} className="input"/>
                    </div>
                    <div>
                        <input name="D" onClick={handleAnswerChange} type="checkbox" className="checkbox"/>
                        <input name="D" onChange={handleChange} className="input"/>
                    </div>
                    
                    <button type="submit" >Next</button>
                </form>
            </div>
        </div>
    )
}

export default CreateQuiz
