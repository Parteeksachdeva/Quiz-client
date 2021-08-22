import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../../axios'
import "./LoginStudent.css"
import studentImg from '../../images/student-male.png'
import teacherImg from '../../images/teacher.png'
function LoginStudent({type}) {
    const [form,setForm] = useState({
        email: "",
        password: ""
    })
    let history = useHistory()
    function handleChange(e){
        setForm({...form,[e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        if(type==="S"){
            axios.post("/users/signin",{...form,teacher:false})
            .then(res=>{
                alert("Login sucessfully")
                localStorage.setItem("token",res.data.token)
                history.push("/student")
            })
            .catch(err=>{
               alert("Invalid Credentials")
            })
             
        }
        else history.push("/teacher")
    }
    return (
        <div className="lstudent">
            <div className="lstudent__main">
            {
                type==="S"?
            <img 
            src={studentImg}
            />
            :
            <img 
            src={teacherImg}
            />
            }
            <form className="main__form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter your password"
                />
                <button type="submit">Login</button>
                </form>
                {type==="S" && 
                <div>
                    <p>New User? Register</p>
                </div>}
            </div>
        </div>
    )
}

export default LoginStudent
