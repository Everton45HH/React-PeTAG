import './App.css';
import Login from '../src/pages/Login/login.jsx';
import Home from '../src/components/HeaderHome/headerHome.jsx';
import Register from './pages/Resgister/register.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
