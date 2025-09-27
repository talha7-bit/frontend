import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Usersignup from './pages/Usersignup'
import Doctorsignup from './pages/Doctorsignup'
import Doctorlogin from "./pages/Doctorlogin"
import Userlogin from './pages/Userlogin'
import { useAdmin, useAuth, useAuthenticate } from './hook/useAuth'
import Onboard from './pages/Onboard'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Adminlogin from './pages/Adminlogin'
import Layout from './admin/Layout'
import Alldoctorsl from './admin/Alldoctorsl'
import Adddoctor from './admin/Adddoctor'
import LayoutD from './doctor/Layout'
import Doctorprofile from './doctor/Doctorprofile'
import Userlayout from './user/Userlayout'
import Doctorprofilec from "./components/Doctorprofile"
import Doctordata from './user/Doctordata'
import Userprofile from './user/Userprofile'
import Userappointments from './user/Userappointments'
import Doctorappointments from './doctor/Doctorappointments'
import Mappointments from './admin/Mappointments'
import Useredit from './user/Useredit'
import Doctoredit from './doctor/Editdprofile'
import Profiledoctor from './admin/Profiledoctor'
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  
  const {data:authdoctor,authdoctorisLoading}=useAuth()
  const {data:authuser}=useAuthenticate()
  const {data:authadmin}=useAdmin()

  return (
   <div className=''>
    <BrowserRouter>
    <Routes>
      
      <Route path='/about' element={<About/>}/>


      <Route path='/usersignup' element={<Usersignup/>}/>
       
      <Route path='/userlogin' element={<Userlogin/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
     
      <Route path='/doctorprofilec' element={<Doctorprofilec/>}/>

      <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/doctorsignup' element={authadmin ? <Adddoctor/> : <Doctorlogin/>}/>
      <Route path='/doctorlogin' element={<Doctorlogin/>}/>
      <Route path='/adminlayout' element={authadmin ? <Layout/> : <Home/>}/>
      <Route path='/adminappointments' element={authadmin ? <Mappointments/> : <Home/>}/>
      <Route path='/alldoctorsl' element={authadmin ? <Alldoctorsl/> : <Home/>}/>
      <Route path='/profiledoctor' element={authadmin ? <Profiledoctor/> : <Home/>}/>


      <Route path='/doctorlayout' element={authdoctor ? <LayoutD/> : <Home/>}/>
      <Route path='/doctorprofile' element={authdoctor ? <Doctorprofile/> : <Home/>}/>
      <Route path='/doctorappointments' element={authdoctor ? <Doctorappointments/> : <Home/>}/>
      <Route path='/doctoredit' element={authdoctor ? <Doctoredit/> : <Home/>}/>


      <Route path='/userlayout' element={authuser ? <Userlayout/> : <Home/>}/>
      <Route path='/doctordata' element={authuser ? <Doctordata/> : <Home/>}/>
      <Route path='/userprofile' element={authuser ? <Userprofile/> : <Home/>}/>
      <Route path='/userappointments' element={authuser ? <Userappointments/> : <Home/>}/>
      <Route path='/useredit' element={authuser ? <Useredit/> : <Home/>}/>
    </Routes>
    <ToastContainer
    position='top-right'
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </BrowserRouter>
   </div>
  )
}

export default App
