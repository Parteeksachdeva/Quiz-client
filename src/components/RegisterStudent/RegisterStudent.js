import React, {useEffect, useState} from 'react'
import "./RegisterStudent.css"
import axios from '../../axios'
import { Link, useHistory } from 'react-router-dom'
import studentImg from '../../images/student-male.png'
function RegisterStudent() {
    const [form,setForm] = useState({
        name:"",
        email: "",
        password: ""
    })
    function handleChange(e){
        setForm({...form,[e.target.name]: e.target.value})
    }
    let history = useHistory()
    function handleSubmit(e){
        e.preventDefault();
        axios.post("/users/signup",form)
        .then(res=>{
            history.push("/studentlogin")
        })
        .catch(err=>{console.log(err)})
    }
    return (
        <div className="lstudent">
            <div className="lstudent__main">
            <img 
            src={studentImg}
            />
            <form className="main__form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter your Full Name"
                />
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
                <button type="submit">Register</button>
                </form>
                <p className="lstudent__footer">Already a Student?<Link to="studentlogin">Login</Link></p>
            </div>
        </div>
    )
}

export default RegisterStudent
