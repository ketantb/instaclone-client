import axios from 'axios';
import React from 'react';
import Cards from './card';
import Header from './header';
import { useState, useEffect } from 'react';
import PostForm from './post_form';
 
export default function PostView({data}) {

  const [userData, setUserData] = useState()
  const fetchData = async () => {
   try{
   //  await axios.get(`https://insta-server-yash.vercel.app`)
   await axios.get('http://localhost:8081/all')
    .then((data) => 
    {
      setUserData(data.data)
    console.log(data.data)
    })
   }
   catch(err){
      console.log(err)
   }
  }
  useEffect(() => {
   fetchData();
  }, [])
  console.log(userData)
  return(
     <>
      <section className='post-view-container'>
         <div className='post-view-header'>
        <Header/>
         </div>
         <div className='post-view-main'>
         <Cards data = {userData}/>
         </div>
      </section>
     </>
  )
}
