import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.png';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, githubProvider, googleProvider } from "../Firebase";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const API_URL = import.meta.env.VITE_API_URL;


function SignUp() {

  const [Name , setName] = useState("");
  const [Email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  // cont [ShowPassword , setShowPassword]= useState(false);
  const navigate = useNavigate();


  const SignUpUser = async (e) => {
e.preventDefault();
try {
  await createUserWithEmailAndPassword(auth, Email, password);
  // User signed up successfully
  alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
   <div className='relative min-h-screen flex flex-row '>
    <div className=" w-full  justify-center items-center h-screen hidden md:flex">
        <img src={logo} alt="login side image" 
        className=" h-50" />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#00bf63] w-full text-white">
        <h1 className="text-3xl font-bold text-white">Wellcome To Dukaan</h1>
        <form className="flex flex-col space-y-4 mt-4">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 border border-gray-300 rounded text-white"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username/Email"
            className="px-4 py-2 border border-gray-300 rounded text-white"
            value={Email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
          <input
            // type={ShowPassword ? "text" : "password"}
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded text-white"
            value={password}
                onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button> */}
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Sign Up
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm">
            Already have an account? <a href="/auth/login" className="text-blue-500">Login</a>
          </p>
        </div>
      </div>
    
    </div>
  )
}

export default SignUp