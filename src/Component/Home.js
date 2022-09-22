import {useState,useEffect} from 'react'
import {Link,useLocation,useNavigate } from 'react-router-dom'
import Header1 from './Header1'
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button, } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEdit from '@mui/icons-material/ModeEdit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Swal from 'sweetalert2';




const theme = createTheme();


function Home() {

  const navigate =useNavigate();
   const {state}=useLocation();
   const[task1,setTask1]=useState(state);

   useEffect (()=>{
     //alert(JSON.stringify(task1))
    // setTask1(state)
   },[])

   const deleteclick=(index)=>{

    task1.splice(index, 1);
    setTask1([...task1]);

    // alert('Delete Success');
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'blue',
      cancelButtonColor: 'red',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
      }
    })
  }

  const View=(item)=>{
    navigate('/View',{state:item});
    Swal.fire({
      icon: 'question',
      text:'Do you want to view your Task!'
      
  })
  }

  const handleEdit=()=>{
    // setName(allData[i])
    // setEditIndex(i)
     navigate('/todo');
}


  return (
<div>
    <Header1/>
    <ThemeProvider theme={theme}>
      {/* <Grid container component="main" sx={{ height: '100vh' }}> */}
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
            height:600
          }}
        >
          <div style={{marginLeft:630,marginBottom:100}}>
              <Link to='/todo'>
                <Icon sx={{ backgroundColor:'green',height:40,width:40,borderRadius:30,fontSize:25,color:'#fff',fontWeight:'bold',marginTop:5}}>+</Icon>
             </Link>
              <h2 style={{color:'#fff',marginTop:20,marginLeft:-30}}>Add Task</h2>
          </div>
          <div style={{marginLeft:400,marginTop:-70,height:350,width:500,backgroundColor:'#fff',borderRadius:10,marginBottom:30}}>
          
          
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:'#000',backgroundColor:'lightblue',width:150,fontWeight:'bold'}}>Title</TableCell>
            <TableCell style={{color:'#000',backgroundColor:'pink',fontWeight:'bold'}}>Delete</TableCell>
            <TableCell style={{color:'#000',backgroundColor:'lightblue',fontWeight:'bold'}}>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
        
          { task1?.length > 0 && task1.map((item,index) => {
            return (
            
              <TableRow
                  key={item.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                
                  <TableCell onClick={() => View(item)} component="th" scope="row">
                    {item.title}
                  </TableCell>
                 
                  <TableCell  component="th" scope="row">
                  <Button className='delete' variant="outlined" onClick={()=>deleteclick(index)} startIcon={<DeleteIcon />}>
                      Delete
                  </Button>
                  </TableCell >
                 
                  <TableCell component="th" scope="row">
                  <Button className='edit' variant="outlined"  startIcon={<ModeEdit />} onClick={()=>handleEdit()}  >
                      Edit
                  </Button>
                  </TableCell>
                  
              </TableRow>
        
          
            );
              })}
      
        </TableBody>
      </Table>
    </TableContainer>
          </div>
         
        </Grid>

      {/* </Grid> */}
  </ThemeProvider>
  
  
</div>

     
  )
}

export default Home;