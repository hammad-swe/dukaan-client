import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//     <Routes>
//       <Route path='/' element={<Hero />} />
//       <Route path='/shop' element={<Shop />} />
//       <Route path='/categories' element={<Categories />} />
//       <Route path='/cart' element={<CartPage />} />
//       <Route path='/auth/signup' element={<SignUp />} />
//       <Route path='/auth/login' element={<Login />} />
//       {/* <Route path="about" element={<About />} />
//       <Route path="projects" element={<Projects />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="github" element={<Github />} /> */}
//       </Routes>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </StrictMode>,
)
