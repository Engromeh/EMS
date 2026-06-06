
import './App.css'
import Login from './pages/auth/Login'
import { Routes, Route } from "react-router-dom";
import Register from './pages/auth/Register';
import ForgetPassword from './pages/auth/ForgetPassword';
import ResetPassword from './pages/auth/RestPassword';


function App() {

  return (
    <>
      
       
 <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />


    </Routes>


      
          
            
       
    </>  )
}

export default App
