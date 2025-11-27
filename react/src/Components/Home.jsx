import React from "react";


const data = [
  { icon: <i className="fa-solid fa-calendar-days"></i>, title: "45-day move-in guarantee" },
  { icon: <i className="fa-solid fa-clipboard"></i>, title: "146 quality checks" },
  { icon: <i className="fa-solid fa-heart"></i>, title: "1,00,000+ happy homes" },
  { icon: <i className="fa-solid fa-city"></i>, title: "100+ cities" },
];

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
        {data.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="getstarted">
        <img src="https://i.postimg.cc/fRK42k5W/sofa.jpg" alt="" />
        <div className="insidecard">
            <h1>see. touch. experience.</h1>
            <p>schedule a visit to our show homes to see what we can do!</p>
            <button className="getbtn">Get Started</button>
        </div>
        

    </div>
    </div>
    
  );
}
