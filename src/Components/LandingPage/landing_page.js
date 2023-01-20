import React from 'react';
import { Link } from 'react-router-dom';
import PostView from '../PostView/post_view';
import "../styles/landing_page.css"

export default function LandingPage() {
  return (
    <>
      <section className='landing-page-container'>
        <div className='landing-page-left-col'>
          {/* <img className='lens-img' src="Assets/lens-1418954@2x.jpg" alt="avatar" />  */}
        </div>
        <div className='landing-page-right-col'>
          <div className='team-name'>10x Ketan</div>
          <div className='enter-btn'>
          <Link className='enter-btn-link' to="/post-view">Enter</Link>
          </div>
        </div>
      </section>
    </>
  )
}
