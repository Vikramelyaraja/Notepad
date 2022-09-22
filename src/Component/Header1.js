import React from 'react'
import {useState} from 'react';
import Logo from '../Asserts/Images/today.png';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import {useNavigate,Link} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import Menu from '@mui/material/Menu';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';


const Header1 = () => {
  const navigate =useNavigate();


  const [auth, setAuth] = useState(localStorage.getItem('username')|| false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleChange = (event) => {
         setAuth(event.target.checked);
       };
    
  const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
       };
    

  const handleClose1 = () =>{
    setOpen(false);
    navigate('/Signin');
  }

  const handleClose2 = () =>{
    setOpen(false);
    
  }

  const handleClose3 = () =>{
    setOpen(false);
    navigate('/Signin');
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };



  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <header className='header1'>
      <div>
    
      <img src={Logo} className='Logo'/>
      </div>

      <nav className='navbar1'>
         {/* <ul>
          <Link className='links1' to='/Signin'>
            Logout
          </Link>
        </ul> */}
        </nav>
        <nav> 
        <ul>
          
            {/* <Avatar sx={{ bgcolor: deepOrange[500] ,width: 34, height: 34 }}>V</Avatar>
             <p style={{color:'#fff',marginRight:30}}>Vikram</p> */}

<Stack direction="row" spacing={2}>

        
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Grid sm={4} xs={12}>
           {auth && (
             <div className='gustmod'>
               <IconButton
                 size="large"
                 aria-label="account of current user"
                 aria-controls="menu-appbar"
                 aria-haspopup="true"
                 onClick={handleMenu}
                 color="inherit"
                 style={{float: 'left'}}
               >
                 <AccountCircle style={{color:'#fff'}} />
                 
               </IconButton>
               <FormGroup>
              
         <FormControlLabel
           control={
             <span
               checked={auth}
               onChange={handleChange}
               aria-label="login switch"
               style={{paddingTop: 48, paddingLeft: 8}}
             />
           }
           label={auth ? auth : 'Guest'}
      
         />
       </FormGroup>
     
               <Menu
                 id="menu-appbar"
                 anchorEl={anchorEl}
                 anchorOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 keepMounted
                 transformOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 open={Boolean(anchorEl)}
                
                 style={{marginTop: 46, marginLeft: 22}}
               >
               {auth?<MenuItem onClick={handleClose3}> <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>Logout</MenuItem>
               
               
               :
               <>
 
                </> 
                }
             
              </Menu>
            </div>
          )}
           </Grid>
        </Button>
        
      </div>
    </Stack>

   
         
        </ul>
      </nav>
    </header>
  )
}

export default Header1

// import {useState} from 'react'; 
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// //import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// //import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import  Logo  from "../Asserts/Images/today.png";
// import { Link,Grid } from '@mui/material';
// import {useNavigate } from "react-router-dom";


// function MenuAppBar() {
//   const [auth, setAuth] = useState(localStorage.getItem('username')|| false);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const navigate=useNavigate();
//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

  

  

//   return (
//     <Box sx={{ flexGrow: 1 }}>
    
//       <AppBar position="static" style={{position: 'relative'}}>
//         <Toolbar>
//         <Grid container justify="center" >
//                     <Grid sm={4} xs={12} justify="center">
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//              <img src={Logo} alt='logo'  className='lgo'/>
//           </IconButton>
//           </Grid>

//           <Grid sm={4} xs={12} justify="space-between" >
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:700,marginTop: '5% '}}>
//             CLG School Notepade
//           </Typography>
//           </Grid>

//           <Grid sm={4} xs={12}>
//           {auth && (
//             <div className='gustmod'>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//                 style={{float: 'left'}}
//               >
//                 <AccountCircle />
                 
//               </IconButton>
//               <FormGroup>
              
//         <FormControlLabel
//           control={
//             <span
//               checked={auth}
//               onChange={handleChange}
//               aria-label="login switch"
//               style={{paddingTop: 48, paddingLeft: 8}}
//             />
//           }
//           label={auth ? auth : 'Guest'}
      
//         />
//       </FormGroup>
     
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorEl)}
                
//                 style={{marginTop: 46, marginLeft: 22}}
//               >
//               {auth?<MenuItem onClick={()=>{localStorage.removeItem('username')}}>logout</MenuItem>:<><Link underline="none"  href='/login'> 
//              <MenuItem >Sign in</MenuItem>
//              </Link>
//                 <MenuItem onClick={()=>{navigate('faqs')}}>Regsiter </MenuItem></> }
             
//               </Menu>
//             </div>
//           )}
//           </Grid>
//                 </Grid>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
// export default MenuAppBar;
