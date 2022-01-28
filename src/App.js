import './App.css';
import Connecte from './components/Connecte';
import Signup_fct from './components/Signup_fct';
import Login_fct from './components/Login_fct';
import Test from './components/Test';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<Signup_fct />} />
            <Route path="/login" element={<Login_fct />} />
            <Route path="/connecte" element={<Connecte />} />
            <Route path="/test" element={<Test />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
