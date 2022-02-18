import './App.css';
import Connecte from './components/Connecte';
import Signup_fct from './components/Signup_fct';
import Login_fct from './components/Login_fct';
import Test from './components/Test';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Groupes from './components/Groupes';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/signup" element={<Signup_fct />} />
          <Route path="/login" element={<Login_fct />} />
          <Route path="/connecte" element={<Connecte />} />
          <Route path="/test" element={<Test />} />
          <Route path="/groupes" element={<Groupes />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
