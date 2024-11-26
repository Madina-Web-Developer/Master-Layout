
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'
import Layout from './Components/LayoutOne/Layout'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import LayoutTow from './Components/LayoutOne/LayoutTow/LayoutTow'
import Product from './Components/Pages/Product'
import LayoutThree from './Components/LayoutOne/LayoutThree/LayoutThree'
import Buy from './Components/Pages/Buy'

function App() {
 const myRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      {/* ========= Layout One ========= */}
         <Route path='/' element={<Layout/>} >
           <Route index element={<Home/>} />
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}    />
         </Route>

      {/*======== Layout Two ===========  */}

          <Route path='/LayoutTwo' element={<LayoutTow/>} >

           <Route index element={<Product/>}/>
          </Route>

      {/* ========= Layout Three ==========  */}

          <Route path='/LayoutThree' element={<LayoutThree/>}>

          <Route index element={<Buy/>}/>

          </Route>

    
    </Route>
  )
 )

  return (
    <>
      
      <RouterProvider router={myRoute}/>
    

    </>
  )
}

export default App
