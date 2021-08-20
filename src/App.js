import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Teacher from "./components/Teacher/Teacher";
import Student from "./components/Student/Student";

function App() {

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/teacher" exact>
            <Teacher/>
          </Route>
          <Route path="/student" exact>
            <Student />
          </Route>
        </Switch>
      </div>
    </Router>
   );
 }

export default App;
