import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout/Layout.jsx'
import Hero from './Pages/Hero/Hero.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'

import './App.css'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Hero />} />
        {/* Other nested routes can go here */}
        </Route>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<SignUp />} />
     </Routes>
    </>
  )
}

export default App
