import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
