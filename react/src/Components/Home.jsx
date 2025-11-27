import React from "react";


const data = [
  { icon: <i className="fa-solid fa-calendar-days"></i>, title: "45-day move-in guarantee" },
  { icon: <i className="fa-solid fa-clipboard"></i>, title: "146 quality checks" },
  { icon: <i className="fa-solid fa-heart"></i>, title: "1,00,000+ happy homes" },
  { icon: <i className="fa-solid fa-city"></i>, title: "100+ cities" },
];

//for accordian

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


export default function Home() {
  return (
    <div className="body">
    <div className="ban">
        <img src="https://i.postimg.cc/tCcjNdV6/img4.jpg" alt="" style={{width:'100%'}}/>
    </div>
    <div className="whycontainer">
      <h2>Why choose us</h2>
      <p>India’s only truly end to interior design agency bringing your dream home in reality</p>
      <div className="why-cards">
        {
        data.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <p>{item.title}</p>
          </div>
        ))
        }
      </div>
    </div>

    {/* second ban */}
    <div className="getstarted">
        <img src="https://i.postimg.cc/fRK42k5W/sofa.jpg" alt="" />
        <div className="insidecard">
            <h1>see. touch. experience.</h1>
            <p>schedule a visit to our show homes to see what we can do!</p>
            <button className="getbtn">Get Started</button>
        </div>
    </div>


    {/* freq question */}
         <div className='card'>
        <div className='div1'>
          
          <p className='part'>Accordion1 <button onClick={acc1}>V</button></p>
          {open && (
            <div>
              Lorem ipsum dolor sit amet consectetur...
            </div>
          )}

          <p className='part'>Accordion2 <button onClick={acc2}>V</button></p>
          {open1 && (
            <div>
              Lorem ipsum dolor sit amet consectetur...
            </div>
          )}

          <p className='part'>Accordion3 <button onClick={acc3}>V</button></p>
          {open2 && (
            <div>
              Lorem ipsum dolor sit amet consectetur...
            </div>
          )}

        </div>
      </div>


    </div>
    
  );
}
