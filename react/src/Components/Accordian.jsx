import React, { useState } from 'react'

export default function Accordian() {

  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)


  function acc1() {
    setOpen(!open)
    setOpen1(false)
    setOpen2(false)
    setOpen3(false)
    setOpen4(false)
  }

  function acc2() {
    setOpen(false)
    setOpen1(!open1)
    setOpen2(false)
    setOpen3(false)
    setOpen4(false)
  }

  function acc3() {
    setOpen(false)
    setOpen1(false)
    setOpen2(!open2)
    setOpen3(false)
    setOpen4(false)
  }
  function acc4() {
    setOpen(false)
    setOpen1(false)
    setOpen2(false)
    setOpen3(!open3)
    setOpen4(false)
  }
  function acc5() {
    setOpen(false)
    setOpen1(false)
    setOpen2(false)
    setOpen3(false)
    setOpen4(!open4)
  }
  
  return (
    <div className='mainacco'> 
        <h2>Frequently Asked Question</h2>
        <div className='acco'>
        <div className='div1'>
          
          <p className='part'>Does DesignCafe deliver home interior projects only in select cities, or is the service available across India? <button onClick={acc1}>V</button></p>
          {open && (
            <div>
DesignCafe currently delivers home interior projects only in Bengaluru, Mysore, Mumbai, Thane, Navi Mumbai, Pune, Hyderabad, Chennai, Coimbatore, Kolkata, Ahmedabad, Gurgaon, Noida, Surat, Vadodara, Vizag, but we’re continually growing our footprint and plan to launch in New Delhi and Bhubaneswar soon!
            </div>
          )}
          </div>
          <div className='div1'>
            <p className='part'>Apart from the promise of hassle-free experience and space-optimised home interiors, why should I hire DesignCafe? <button onClick={acc2}>V</button></p>
          {open1 && (
            <div>
              With DesignCafe, you can look forward to a hassle-free, personalised home interior design experience, from design board to delivery. With customised services and seamless delivery protocols, you can trust us to breathe life into your vision and craft a tailor-made, space-optimised home within your budget.
            </div>
          )}
          </div>
          
            <div className='div1'> 
              <p className='part'>How many home interior design projects does DesignCafe complete in a month? <button onClick={acc3}>V</button></p>
          {open2 && (
            <div>
              DesignCafe has delivered 15000+ homes to date. We complete about 100+ home interior projects per month!
            </div>
          )}
            </div>
            <div className='div1'> 
              <p className='part'>Does DesignCafe have an Experience Centre? <button onClick={acc4}>V</button></p>
          {open3 && (
            <div>
              Yes, DesignCafe has multiple Experience Centres across India. You can visit us in cities like Bengaluru, Mumbai, Hyderabad, Chennai, Pune, Navi Mumbai, Thane, Mysore, Coimbatore, Kolkata, Ahmedabad, Gurgaon, Noida, and Vizag. Explore a wide range of designs, materials, and finishes to experience our home interior solutions firsthand. To know more about our experience centres - https://www.designcafe.com/experience-centre/
            </div>
          )}
            </div>
            <div className='div1'> 
              <p className='part'>What sets DesignCafe apart from other interior design companies in Bengaluru, Mumbai, Hyderabad and Chennai? <button onClick={acc5}>V</button></p>
          {open4 && (
            <div>
             DesignCafe has an upstanding quality code, with award-winning, in-house interior designers, intelligent designs and functionality-first protocols. Our handpicked interior designers are among the crème de la crème of the industry, and our quality standards are mirrored in the slew of positive customer reviews on our Google and Facebook pages!
            </div>
          )}
            </div>
          </div>


      </div>
    
  )
}
