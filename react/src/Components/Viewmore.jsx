// import React, { useEffect, useState } from "react";

// export default function IslandKitchen() {
//   const [kitchens, setKitchens] = useState([]);

  
//   useEffect(() => {
//     const data = [
//       {
//         name: "Kitchen",
//         img: "https://i.postimg.cc/ZRyzm44K/island2.jpg",
        
//       },
//       {
//         name: "Kitchen",
//         img: "https://i.postimg.cc/ZRyzm44K/island2.jpg",
//       },
//       {
//         name: "Kitchen",
//         img: "https://i.postimg.cc/ZRyzm44K/island2.jpg",
//       },
//       {
//         name: "Kitchen",
//         img: "https://i.postimg.cc/ZRyzm44K/island2.jpg",
//       },
//     ];

//     setKitchens(data);
//   }, []);

//   return (
//     <div style={{ padding: "40px"}}>
//       <h1 style={{ fontSize: "40px", marginTop: "100px"}}>Island Kitchen</h1>

//       <p style={{ marginBottom: "30px", color: "#555", maxWidth: "900px"}}>
//         Kitchens should be elegant looking as well as serve our purpose of
//         storage, convenient cooking, and comfortable living. Below are some
//         island kitchen models displayed for inspiration.
//       </p>
     
      
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {kitchens.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               borderRadius: "10px",
//               overflow: "hidden",
//               boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//               background: "#fff",
//             }}
//           >
//             <img src={item.img} alt={item.name} style={{ width: "100%", height: "220px", objectFit: "cover" }}/>
//             <div style={{ padding: "15px", fontSize: "20px", fontWeight: "600" }}>
//               {item.name}
//             </div>
//             <div style={{padding:" 0px 15px 15px"}}>
//              <button style={{
//                 width:"100%",
//                 borderRadius:"20px",
//                 heig
//              }}>
//                 Add Design 
//              </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from 'react'

export default function Viewmore() {
  return (
    <div>
      
    </div>
  )
}



