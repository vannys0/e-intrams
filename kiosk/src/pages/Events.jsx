import React from 'react'
import './style.css';
import Pacman from '../assets/image.png';
import Admin from '../assets/cbsua-logo.png';

function Events() {
  return (
    <div className='events d-flex gap-4'>
        <div className='event d-flex flex-column gap-2'>
            <div className='d-flex gap-2'>
                <img loading='lazy' src={Admin} className='profile' alt="No Image" />
                <div className='d-flex flex-column justify-content-center'>
                    <span className='user-name'>Administrator</span>
                    <span className='date-posted'>2 hrs ago.</span>
                </div>
            </div>
            <span>This is a caption Pacquio vs Barrios</span>
            <img loading='lazy' src={Pacman} className='event-image' alt="No Image" />
            <div className='d-flex align-items-center justify-content-between mt-2'>
                <span className='react'>Like</span>
                <span className='react'>Comment</span>
                <span className='react'>Share</span>
            </div>
        </div>
        <div className='event d-flex flex-column gap-2'>
            <div className='d-flex gap-2'>
                <img loading='lazy' src={Admin} className='profile' alt="No Image" />
                <div className='d-flex flex-column justify-content-center'>
                    <span className='user-name'>Administrator</span>
                    <span className='date-posted'>2 hrs ago.</span>
                </div>
            </div>
            <span>Good luck sir manny!!!</span>
            <img loading='lazy' src={Pacman} className='event-image' alt="No Image" />
            <div className='d-flex align-items-center justify-content-between mt-2'>
                <span className='react'>Like</span>
                <span className='react'>Comment</span>
                <span className='react'>Share</span>
            </div>
        </div>
    </div>
  )
}

export default Events