import {useState,useEffect} from 'react'
import {Link,useLocation,useNavigate } from 'react-router-dom'
import Header from './Header'
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button, } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEdit from '@mui/icons-material/ModeEdit';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Swal from 'sweetalert2';




const theme = createTheme();


function Home() {

  const navigate =useNavigate();
   //const {state}=useLocation();
   //const[task1,setTask1]=useState(state);
   var notelistdata = JSON.parse(localStorage.getItem("notelist")) || [];
  const [task1, setTask1] = useState(notelistdata?.length > 0 ? notelistdata : []);
  function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    arr.splice(objWithIdIndex, 1);

    return arr;
  }

   useEffect (()=>{
  
   },[])

 
  const deleteclick = (id) => {
    var finaldata = removeObjectWithId(notelistdata, id)
    localStorage.setItem("notelist", JSON.stringify([...finaldata]))
    setTask1([...finaldata]);
    alert('delete');
  };

  //  const deleteclick=(index)=>{

  //   task1.splice(index, 1);
  //   setTask1([...task1]);
    
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: 'blue',
  //     cancelButtonColor: 'red',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your task has been deleted.',
  //         'success'
  //       )
  //     }
  //   })
  // }

  const View=(item)=>{
    navigate('/todo/viewmode',{state:item});
  }


	const handleEdit = (item) => {
		navigate('/todo/editmode',{ state: item });
	};

  const updateStatus = (id) => {
    var findIndex = notelistdata.findIndex((item) => item.id === id)
    notelistdata[findIndex].status = 'done';
    setTask1([...notelistdata])
    localStorage.setItem("notelist", JSON.stringify([...notelistdata]))
    Swal.fire('Good job!', 'Your Task is done !', 'success');

  }


  return (
<div>
    <Header/>
    <ThemeProvider theme={theme}>
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
            height:663
          }}
        >
          <div style={{marginLeft:630,marginBottom:100}}>
              <Link to='/todo/addmode'>
                <Icon sx={{ backgroundColor:'green',height:40,width:40,borderRadius:30,fontSize:25,color:'#fff',fontWeight:'bold',marginTop:5}}>+</Icon>
             </Link>
              <h2 style={{color:'#fff',marginTop:20,marginLeft:-30}}>Add Task</h2>
          </div>

          <div className="listed">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: '#cbade6' }}>
                <TableCell style={{ color: '#000', width: 150, fontWeight: 'bold' }}>
                  ID
                </TableCell>
                <TableCell style={{ color: '#000', width: 150, fontWeight: 'bold' }}>
                  Title
                </TableCell>
                <TableCell style={{ color: '#000', width: 150, fontWeight: 'bold' }}>
                  Details
                </TableCell>
                <TableCell style={{ color: '#000', fontWeight: 'bold' }} colSpan={2}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {task1?.length > 0 ?
                task1.map((item, index) => {
                  return (
                    <TableRow key={index} >
                      <TableCell onClick={() => View(item)}>
                        {item.id}
                      </TableCell> <TableCell onClick={() => View(item)}>
                        {item.title}
                      </TableCell>
                      <TableCell onClick={() => View(item)}>
                        {item.status === 'todo' ? item.description : <s>{item.description}</s>}
                      </TableCell>
                      <TableCell colSpan={2}>
                        <ModeEdit onClick={() => handleEdit(item)} />
                        <DeleteIcon onClick={() => deleteclick(item.id)} />

                        {item.status === 'todo' ? <PublishedWithChangesIcon onClick={() => updateStatus(item.id)} /> : <TaskAltIcon />}
                      </TableCell>
                    </TableRow>);
                }) :
                <TableRow colSpan={4} style={{ textAlign: 'center' }}>
                  <center>No Data, Click + Button to add data</center></TableRow>}
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