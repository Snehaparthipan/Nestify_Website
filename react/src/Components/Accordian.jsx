import React, { useState } from 'react'

export default function Accordian() {

  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  function acc1() {
    setOpen(!open)
    setOpen1(false)
    setOpen2(false)
  }

  function acc2() {
    setOpen(false)
    setOpen1(!open1)
    setOpen2(false)
  }

  function acc3() {
    setOpen(false)
    setOpen1(false)
    setOpen2(!open2)
  }
  
  return (
    <div className='mainacco'> 
        <h2>Frequently Asked Question</h2>
        <div className='acco'>
        <div className='div1'>
          
          <p className='part'>Accordion1 <button onClick={acc1}>V</button></p>
          {open && (
            <div>
              Lorem ipsum dolor sit amet consectetur...
            </div>
          )}
          </div>
          <div className='div1'>
            <p className='part'>Accordion2 <button onClick={acc2}>V</button></p>
          {open1 && (
            <div>
              Lorem ipsum dolor sit amet consectetur...
            </div>
          )}
          </div>
          
            <div> 
              <p className='part'>Accordion3 <button onClick={acc3}>V</button></p>
          {open2 && (
            <div>
              Lorem ipsum dolor sit amet consectetur...
            </div>
          )}
            </div>
          </div>


      </div>
    
  )
}
