import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import JobListComponent from './components/JobListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateJobComponent from './components/CreateJobComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent /> 
        <div className="container">
          <Switch> 
            <Route path = "/" exact component = {JobListComponent}></Route>
            <Route path = "/jobs" component = {JobListComponent}></Route>
            <Route path = "/add-job" component = {CreateJobComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
