import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Reset from './components/reset/Reset';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/reset' element={<Reset />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
