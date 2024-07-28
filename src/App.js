import { Route, Router } from 'react-router-dom';
import './App.css';
import Student from './components/Student';
import Teacher from './components/Teacher';

function App() {
  return (
    <div className="App">
{/* 
      <Router>

        <switch>
          <Route path="/teacher" component={Teacher} />
          <Route path="/student" component={Student} />


        </switch>


      </Router> */}




      <Teacher/>

      <Student/>
    </div>
  );
}

export default App;
