import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter , createBrowserRouter,  createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Hero from './Pages/Hero/Hero.jsx'
 import Shop from './Pages/Shop/Shop.jsx'
  import Categories from './Pages/Categories/Categories.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='/' element={<Hero />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/categories' element={<Categories />} />
      {/* <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} /> */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
