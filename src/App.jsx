import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/login.jsx';
import Home from './pages/Home/home.jsx';
import DeviceTracker from './pages/DeviceTracker/DeviceTracker.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deviceTracker" element={<DeviceTracker/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
