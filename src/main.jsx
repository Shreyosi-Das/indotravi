import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Tour from './components/Tour.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Login from './components/login.jsx'




const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='tour' element={<Tour/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='login' element={<Login/>}/>
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>,
)
