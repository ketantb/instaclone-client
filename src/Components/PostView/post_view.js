import React from 'react';
import Cards from './card';
import Header from './header';
 
export default function PostView({userData}) {
//   console.log(userData)
  return(
     <>
      <section className='post-view-container'>
         <div className='post-view-header'>
        <Header/>
         </div>
         <div className='post-view-main'>
         <Cards userData = {userData}/>
         </div>
      </section>
     </>
  )
}
