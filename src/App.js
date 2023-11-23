import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import Welcome from './components/Welcome';
import AddStudent from './components/AddStudent';
import ShowAllStudents from "./components/ShowAllStudents";

function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route exact path="/" element={<Welcome/>}/>
      <Route path="/Main" element={<Main/>}/>
      <Route path="/AddStudent" element={<AddStudent/>}/>
        <Route path="/ShowStudents" element={<ShowAllStudents/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
