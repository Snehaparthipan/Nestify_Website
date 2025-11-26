import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [user, setUser] = useState(false)
  const[drop,setDrop]=useState(false)

  return (
    <div className='body'>
      <nav className='navbar'>
        <h1 className='logo'>Nestify</h1>

        <ul className='nav-links'>
            <Link className='li' to='/'>Home</Link>
            <Link className='li' to='/about'>About</Link>
            <Link className='li' to='/categories'>Categories<button className='drop-btn' onClick={() => setDrop(!drop)}>▼</button></Link>
            <Link className='li' to='/contact'>Contact</Link>
            <i className="fa-solid fa-cart-shopping"></i>
        </ul>

        <button className='menu-btn' onClick={() => setUser(!user)}>≡</button>
      </nav>
    {drop && (
        <ul className='dropdownmenu1'>
          <Link className='items' to='/'>Kitchen</Link>
          <Link className='items' to='/about'>Bedroom</Link>
          <Link className='items' to='/categories'>Dinning Room</Link>
          <Link className='items' to='/contact'>Living Room</Link>
        </ul>
      )}
     
      {user && (
        <ul className='dropdown'>
          <Link className='li1' to='/'>Home</Link>
          <Link className='li1' to='/about'>About</Link>
          <Link className='li1' to='/categories'>Categories<button className='drop-btn' onClick={() => setDrop(!drop)}>▼</button></Link>
          {drop && (
        <ul className='dropdownmenu'>
          <Link className='items' to='/'>Kitchen</Link>
          <Link className='items' to='/about'>Bedroom</Link>
          <Link className='items' to='/categories'>Dinning Room</Link>
          <Link className='items' to='/contact'>Living Room</Link>
        </ul>
      )}
          <Link className='li1' to='/contact'>Contact</Link>
        </ul>
      )}
      
    </div>
  )
}
