import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login/login.jsx';
import Home from '../src/components/HeaderHome/headerHome.jsx';
import Register from './pages/Resgister/register.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/home" element={<Home />} />
        {/* o usuario está sendo direcionado para o home errado , temos o home que explica o projeto e o home de gerenciar sua conta 'Tela Inicial após login' */}
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
