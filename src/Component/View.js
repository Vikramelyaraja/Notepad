import {useState,useEffect} from 'react'
import {Link,useLocation, } from 'react-router-dom'
import Header1 from './Header1'
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button, } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEdit from '@mui/icons-material/ModeEdit';


const theme = createTheme();


function Home() {

    const {state}=useLocation();
   // const[task1,setTask1]=useState(item1);

   useEffect (()=>{
    // alert(JSON.stringify(state))

   },[])

//    const deleteclick=(index)=>{

//     task1.splice(index, 1);
//     setTask1([...task1]);

//     alert('delete');

//   }
  return (
<div>
    <Header1/>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' ,width:2300}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
         
          <div style={{marginLeft:400,marginTop:60,height:250,width:500,backgroundColor:'#fff',borderRadius:10,flexDirection:'row'}}>
          <div style={{height:50,backgroundColor:'pink',borderTopRightRadius:10,borderTopLeftRadius:10}}>
          <p style={{color:'#000',marginLeft:230,fontWeight:'bold'}}>Title </p>
          </div>
          <div style={{height:60}}>
          <p style={{color:'#000',marginLeft:10}}>{state.title} </p>
          </div>
          <div style={{height:50,backgroundColor:'pink'}}>
          <p style={{color:'#000',marginLeft:210,fontWeight:'bold'}}>Description </p>
          </div>
          <div style={{height:60}}>
          <p style={{color:'#000',marginLeft:10}}>{state.desc} </p>
          </div>
          </div>
         
        </Grid>

      </Grid>
  </ThemeProvider>
  
  
</div>

     
  )
}

export default Home;