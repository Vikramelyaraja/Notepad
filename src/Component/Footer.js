import React from 'react'
import {Link} from 'react-router-dom'
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Favorite from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:30
}));

const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li>
        <Link className='links' to='/faq'>  
          <button>FAQ?</button>
        </Link>
        </li>

        <li>
        <li>
          <Stack style={{marginRight:300,marginTop:10}} direction="row" spacing={2}>
            <p style={{color:'#fff'}}>© 2022 Creative Tim, all rights reserved. Made with <Favorite  fontSize="small" style={{color:'red',}}/> for a better web.</p>
          </Stack>
        </li>

        <Stack style={{marginLeft:700,marginTop:-35}} direction="row" spacing={2}>
        <Item>
           <Link  to='/faq'>  
              <Facebook  style={{color:'blue'}}/>
          </Link>
        </Item>
        <Item>
          <Link  to='/faq'>  
              <Twitter  style={{color:'skyblue'}}/>
          </Link>
        </Item>
        <Item>
          <Link  to='/faq'>  
              <Instagram  style={{color:'pink'}}/>
          </Link>
        </Item>
        <Item>
          <Link  to='/faq'>  
              <WhatsApp  style={{color:'lightgreen'}}/>
          </Link>
        </Item>

        </Stack>
        </li>
      </ul>
      

    </footer>
  )
}

export default Footer