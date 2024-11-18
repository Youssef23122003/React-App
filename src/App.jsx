import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './Portfolio'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Layout from './Layout'



function App() {
  let routes = createBrowserRouter([{path:'',
    element:<Layout/>,
    children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>}
  ]
}])
  const [count, setCount] = useState(0)
  return (
    <>
   
   <RouterProvider router={routes}></RouterProvider>
    
     
    </>
  )
}

export default App
