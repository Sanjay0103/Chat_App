import { Register } from "./Pages/Register";
import "./style.scss"
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      <Register />
    </div>
    
  );
}

export default App;
