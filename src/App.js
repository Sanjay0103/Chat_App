import { Register } from "./Pages/Register";
import "./style.scss";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext);
  
  const ProtectedRoute = ({children}) => {
      if(!currentUser){
        return <Navigate to="/login"/>
      }

      return children
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
