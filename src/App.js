import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Start from './components/Start/Start'
import Footer from './components/Footer/Footer'
import Layout from './layout/Layout'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
export default function App() {

  let routes = createBrowserRouter([
    {path:"/",element:<Layout/>,children:[
      {index:true,element:<Start/>},
      {path:"start",element:<Start/>},
      {path:"about",element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"contact",element:<Contact/>}

    ]}
  ])
  return (
    <>
      <RouterProvider router={routes}/>
      <Footer/>
    </>
  )
}
