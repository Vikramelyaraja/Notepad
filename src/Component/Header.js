import React from 'react'
import {useNavigate} from 'react-router-dom';
import Logo from '../Asserts/Images/today.png';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const navigate =useNavigate();

  const handleMenu = () =>{

    navigate('/Signin');
  }

  return (
    <header className='header'>
      <div>
    
      <img src={Logo} className='Logo'/>
      </div>

          <IconButton
                 size="large"
                 aria-label="account of current user"
                 aria-controls="menu-appbar"
                 aria-haspopup="true"
                 onClick={handleMenu}
                 color="inherit"
                 style={{marginLeft:1000}}
               >
                 <AccountCircle style={{color:'#fff'}} />
                
               </IconButton>
               <p className='links' >
                  GUEST
                </p> 
             
    
    </header>
  )
}

export default Header