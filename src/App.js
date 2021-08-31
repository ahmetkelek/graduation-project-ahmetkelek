import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import ApplicationForm from "./components/Form/ApplicationForm";
import Admin from "./components/Admin/Admin";
import QueryForm from "./components/QueryForm/QueryForm";
import "./App.css";
import ErrorPage from '../src/components/Error/ErrorPage'
import Status from "./components/ApplicationStatus/Status";



function App() {
  return (
    <div className="container">
      <Router>
        <div className="navPanel">
          <Link to="/" className="home">
            Anasayfa
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/Admin" className="admin">
            Admin Panel
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/QueryForm" className="query">
            Başvuru Sorgula
          </Link>
        </div>
        <Switch>
          <Route path="/ApplicationForm">
            <ApplicationForm />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/QueryForm">
            <QueryForm />
          </Route>
          <Route path="/ErrorPage">
            <ErrorPage />
          </Route>
          <Route path="/Status">
            <Status />
          </Route>
     
          <Route exact path="/">
            <Redirect to="/ApplicationForm" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
