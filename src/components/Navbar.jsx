import React,{useState} from 'react'
import '../css_styles/navbar.css'
import {Link} from 'react-router-dom'
import { MenuItems } from './menuItems'

const Navbar = () => {
        
    const [clicked,setClicked] = useState(false);
       const handleClick = () =>{
                    if(clicked!==true){
                        setClicked(true);   
                    }
                        else{
                            setClicked(false)
                        }
                    
       }
 

  return (
   <div className='NavbarItems'>
    <h1 className='navbar-logo'>Trippy</h1>

    <div className='menu-icons' onClick={handleClick}>
    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
    </div>

    <ul className={clicked? "nav-menu active" : "nav-menu"}>

        {
          MenuItems.map((item,index)=>{
            return(
                <li key={index} className={item.cName}>
                <Link to={item.url}><i class={item.icon}></i>
                {item.title}</Link>
            </li>
            )
          })  
        }
         

    </ul>

   </div>
  )
}

export default Navbar;