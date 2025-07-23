import React from 'react'
import './style.css';
import Profile from '../assets/profile.jpg';
import Arjay from '../assets/arjay.png';
import Darren from '../assets/darren.png';

function Home() {
  return (
    <div className='home gap-2'>
        <div className='status d-flex align-items-center justify-content-center p-2 gap-4'>
            <img src={Profile} className='profile' alt="No Image" />
            <input type="text" className='form-control border-radius-2' placeholder="What's on your mind?" />
            <span>Update</span>
        </div>
        <div className='feed p-2'>
            <div className='d-flex justify-content-between mb-5'>
                <div className='gap-2 d-flex align-items-center justify-content-center'>
                  <img src={Profile} className='profile' alt="No Image" />
                  <div className='d-flex flex-column justify-content-center'>
                    <span className='user-name'>Ivan Bengcolado</span>
                    <span className='date-posted'>Just now.</span>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            </div>
            <div className='mb-5'>
                <p>Eyyyy champion pa nga. HAHAHA</p>
            </div>
            <div className='d-flex justify-content-around'>
              <span className='react'>Like</span>
              <span className='react'>Comment</span>
              <span className='react'>Share</span>
            </div>
        </div>
        <div className='feed p-2'>
            <div className='d-flex justify-content-between mb-5'>
                <div className='gap-2 d-flex align-items-center justify-content-center'>
                  <img src={Arjay} className='profile' alt="No Image" />
                  <div className='d-flex flex-column justify-content-center'>
                    <span className='user-name'>Arjay Manlangit</span>
                    <span className='date-posted'>2 hrs ago.</span>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            </div>
            <div className='mb-5'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className='d-flex justify-content-around'>
              <span className='react'>Like</span>
              <span className='react'>Comment</span>
              <span className='react'>Share</span>
            </div>
        </div>
        <div className='feed p-2'>
            <div className='d-flex justify-content-between mb-5'>
                <div className='gap-2 d-flex align-items-center justify-content-center'>
                  <img src={Darren} className='profile' alt="No Image" />
                  <div className='d-flex flex-column justify-content-center'>
                    <span className='user-name'>Darren Mulleda</span>
                    <span className='date-posted'>1 day ago.</span>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            </div>
            <div className='mb-5'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className='d-flex justify-content-around'>
              <span className='react'>Like</span>
              <span className='react'>Comment</span>
              <span className='react'>Share</span>
            </div>
        </div>
    </div>
  )
}

export default Home