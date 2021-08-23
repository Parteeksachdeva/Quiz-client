import "./App.css";
import {useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Teacher from "./components/Teacher/Teacher";
import Student from "./components/Student/Student";
import Quiz from "./components/Quiz/Quiz";
import CreateQuiz from "./components/CreateQuiz/CreateQuiz";
import Login from "./components/Login/LoginStudent";
import RegisterStudent from "./components/RegisterStudent/RegisterStudent";
import Home from "./components/Home/Home";

function App() {
  
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/teacher" exact>
            <Teacher/>
          </Route>
          <Route path="/createquiz/:id" exact>
            <CreateQuiz />
          </Route>
          <Route path="/createquiz" exact>
            <CreateQuiz />
          </Route>
         
          <Route path="/student" exact>
            <Student/>
          </Route>
          <Route path="/quiz/:id" exact>
            <Quiz/>
          </Route>
          <Route path="/studentlogin" exact>
            <Login type="S"/>
          </Route>
          <Route path="/teacherlogin" exact>
            <Login type="T"/>
          </Route>
          <Route path="/studentregister" exact>
            <RegisterStudent/>
          </Route>
        </Switch>
      </div>
    </Router>
   );
 }

export default App;
