import {useState,useEffect} from 'react'
import {useNavigate,} from 'react-router-dom'
import {Button, } from "@mui/material";
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEdit from '@mui/icons-material/ModeEdit';
import Swal from 'sweetalert2';

const Todo = () => {
    const navigate =useNavigate();
     const [taskList, settaskList] = useState([]);  
    const back = () => {
       
        navigate('/Home');
       }

       useEffect(() => {
         
          // alert(JSON.stringify(add))

          console.log(add)
       }, []);
        
    

    const [title1,setTitle1]=useState('');
    const[desc1,setDesc1]=useState('');

    const[add,setAdd]=useState([]);


    
      
      const titlechange=(e)=>{
        setTitle1(e.target.value)

      }

      const descchange=(e)=>{

          setDesc1(e.target.value)
      }

      const addclick=()=>{

        if(title1==="" ){

          Swal.fire({icon: 'warning',text:'Enter Title'})
        }
        else if(desc1===""){

          Swal.fire({icon: 'warning',text:'Enter Description'})

        }
        else{
          
         setAdd((oldData) => {
        
          return ([...oldData, {'title': title1, 'desc': desc1 }])
        
        })
        
        Swal.fire(
          'Thank You!',
          'Successfully added your Task!',
          'success'
        )
      }
        setTitle1("");
        setDesc1("");

      }

      const deleteclick=(index)=>{

        setAdd((items) => items.filter((_, i) => i !== index));

        alert('delete');

      }


  return (
    <div className='todo'>
        <div className='b2'>
         <Button style={{marginLeft:30,marginTop:50}} variant="contained"  onClick={() => back()}>Back</Button>
        </div>
      
        <div style={{marginLeft:350,marginTop:50,
            backgroundColor:'#fff',width:600,height:400,borderRadius:10,color:'#000',display:'flex',alignItems:'center',justifyContent:'center'}}>
                

        <Box    
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
        <Typography component="h1" variant="h5">
              Today Task
        </Typography>
        
            <TextField value={title1} type="text" placeholder='Title' name='title' onChange={(e) => titlechange(e)} className="title"/><br/>
         
            <TextField multiline   rows={3}    value={desc1} type="text" placeholder='Description' name='desc' onChange={(e) => descchange(e)} className="desc"/>
           


        <div style={{flexDirection:'row'}}>
         
             <Button className='add' variant="contained" onClick={()=>addclick()} >Add</Button>
        
             <Button className='view' variant="contained" onClick={() => navigate('/Home', { state: add })} >View</Button>
         </div>
        </Box>
        
        </div>
            
      </div>
    );
  
    }

export default Todo;






// import {useState,useEffect} from 'react'
// import {useNavigate,} from 'react-router-dom'
// import {Button, } from "@mui/material";
// import Alert from '@mui/material/Alert';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ModeEdit from '@mui/icons-material/ModeEdit';

// const Todo = () => {
//     const navigate =useNavigate();
//      const [taskList, settaskList] = useState([]);  
//     const back = () => {
       
//         navigate('/Home');
//        }

//        useEffect(() => {
         
//           // alert(JSON.stringify(add))

//           console.log(add)
//        }, []);
        
    

//     const [title1,setTitle1]=useState('');
//     const[desc1,setDesc1]=useState('');

//     const[add,setAdd]=useState([]);
//     const [show,setShow]=useState(false)
//     const [editIndex,setEditIndex]=useState('')

    
      
//       const titlechange=(e)=>{
//         setTitle1(e.target.value)

//       }

//       const descchange=(e)=>{

//           setDesc1(e.target.value)
//       }

//       const addclick=()=>{

//         if(title1==="" ){

//             alert('Enter  title')
//         }
//         else if(desc1===""){

//           alert('Enter desc')

//         }
//         else{
          
//          setAdd((oldData) => {
        
//           return ([...oldData, {'title':title1,'desc':desc1}])
        
//         })
//         alert('Added Success')
//       }
//         setTitle1("");
//         setDesc1("");

//       }

     
//     const handleDelete=(index)=>{
//       add.splice(index,1)
//       setAdd([...add])
//   }

//   const handleEdit=(i)=>{
//       setTitle1(add[i])
//       setDesc1(add[i])
//       setShow(true)
//       setEditIndex(i)
//   }
//   const handleUpdate=()=>{
//       add.splice(editIndex,1, {'title':title1,'desc':desc1})
//       setAdd([...add])
//       setShow(false)
//       setTitle1("")
//       setDesc1("");
//   }

//   return (
//     <div className='todo'>
//         <div className='b2'>
//          <Button style={{marginLeft:30,marginTop:50}} variant="contained"  onClick={() => back()}>Back</Button>
//         </div>
      
//         <div style={{marginLeft:350,marginTop:50,
//             backgroundColor:'#fff',width:600,height:400,borderRadius:10,color:'#000',display:'flex',alignItems:'center',justifyContent:'center'}}>
                

//         <Box    
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//         <Typography component="h1" variant="h5">
//               Today Task
//         </Typography>
        
//             <TextField value={title1} type="text" placeholder='Title' name='title' onChange={(e) => titlechange(e)} className="title"/><br/>
         
//             <TextField multiline   rows={3}    value={desc1} type="text" placeholder='Description' name='desc' onChange={(e) => descchange(e)} className="desc"/>
           


//         <div style={{flexDirection:'row'}}>
//         {!show?
//         <div>
//              <Button className='add' variant="contained" onClick={()=>addclick()} >Add</Button>
//          </div>  
//              :
//         <div>
//              <Button className='add' variant="contained" onClick={handleUpdate} >Edit</Button>
//         </div>
//         }
         
//              <Button className='view' variant="contained" onClick={() => navigate('/Home', { state: add })} >View</Button>
//          </div>
//         </Box>
        
//         </div>
//         <div style={{height:400,width:300,marginLeft:950,backgroundColor:'#fff',marginTop:-400}}>
//         {
//                 add.map((val,i)=>
//                 <div>
//                     <h1>{val.title}</h1>
//                     <h1>{val.desc}</h1>
//                     <button className="edit" onClick={()=>handleEdit(i)} >Edit</button>
//                     <button className="delete" onClick={()=>handleDelete(i)}>Delete</button>
//                 </div>
//                 )
//             }
//         </div> 
//       </div>
//     );
  
//     }

// export default Todo;



