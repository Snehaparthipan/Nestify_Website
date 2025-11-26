import React from 'react'
import Navbar from './Navbar'
import banvid from '../assets/Banvideo.mp4'

export default function Home() {
  return (
    <>
    <video src={banvid} muted autoPlay loop playsInline className='banvideo'></video>
    </>
  )
}
