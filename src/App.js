import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LandingPage from './Components/LandingPage/landing_page';
import IndexComponent from './Components/indexComponent/index_component';
import PostView from './Components/PostView/post_view';
import PostForm from './Components/PostView/post_form';
 
function App()  {

  const [userData, setUserData] = useState()
  const fetchData = async () => {
   try{
   await axios.get("https://instaketan-server.onrender.com/all")
    .then((data) => 
    {
      setUserData(data.data)
    // console.log(data.data)
    })
   }
   catch(err){
      console.log(err)
   }
  }
  useEffect(() => {
   fetchData();
  }, [])
  // console.log(userData)
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/post-view' element={<PostView userData = {userData}/>}/>
        <Route path='/post-form' element={<PostForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;