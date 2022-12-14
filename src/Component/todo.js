import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const Todo = () => {

  const { state } = useLocation();
  const {mode}=useParams();
  const [title1, setTitle1] = useState(state?.title?state.title :'');
  const [desc1, setDesc1] = useState(state?.description?state.description :'');
  const [show,setShow] = useState(state);
  const [view ,setView]= useState(mode);
  const [list,setList]=useState([]);
  const [users, setUsers] = useState([])
  

  let disabled=false;
  let name ='';
  
  const required = true;

  const navigate = useNavigate();
  const [taskList, settaskList] = useState([]);

  console.log(mode)
  
  

  const back = () => {
    navigate("/Home");
  };

  useEffect(() => {
  // alert(users)
   fetchData()

  }, []);

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.products)
        //console.log(data)
      })
  }


   
 

  const titlechange = (e) => {
    setTitle1(e.target.value);
  };

  const descchange = (e) => {
    setDesc1(e.target.value);
  };

  const addclick = (e) => {


    if (title1 === '') {
			Swal.fire('The Internet?', 'Enter your Title', 'question');
		} else if (desc1 === '') {
			Swal.fire('The Internet?', 'Enter your Description', 'question');
		} else {
			// Get Stored data
			let notelistdata = JSON.parse(localStorage.getItem("notelist"))

			if (mode === "addmode") {
				// Check for existance
				if (notelistdata?.length > 0) {
					// Store append data with previous value
					localStorage.setItem("notelist", JSON.stringify([...notelistdata, { id:getNextId(notelistdata), title: title1, description: desc1, status: 'todo' }]))
				
          function getNextId(obj) {
            return (Math.max.apply(Math, obj.map(function(o) {
              return o.id;
            })) + 1);
          }
        }
				else {
					// Store first append data 
					localStorage.setItem("notelist", JSON.stringify([{ id: 1, title: title1, description: desc1, status: 'todo' }]))
				}
				// const tempre = [{ id: listed.length + 1, title: title, description: description }];
				Swal.fire('Good job!', 'Your Entry is Success!', 'success');
				navigate('/Home',{ state:users });
			}
			else if (mode === "editmode") {
				var findIndex = notelistdata.findIndex((item) => item.id === state.id)
				notelistdata[findIndex].title = title1;
				notelistdata[findIndex].description = desc1;
				localStorage.setItem("notelist", JSON.stringify([...notelistdata]))
				Swal.fire('Good job!', 'Your Entry is updated Success!', 'success');
				navigate('/Home');
			}
			else if (mode === "viewmode") {
				const view = [{ id: taskList.length + 1, title: title1, description: desc1 }];
      navigate('/Home',{state:view});
				
			}
		}

  
  };


  return (
    <div className="todo">
      <div className="b2">
        <Button
          style={{ marginLeft: 30, marginTop: 50 }}
          variant="contained"
          onClick={() => back()}
        >
          Back
        </Button>
      </div>


      
      <div
        style={{
          marginLeft: 350,
          marginTop: 50,
          backgroundColor: "#fff",
          width: 600,
          height: 400,
          borderRadius: 10,
          color: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
       
        
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Today Task
          </Typography>

          <TextField
            value={title1}
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e) => titlechange(e)}
            className="title"
            disabled={{
							'viewmode': true,
							'addmode': false,
							'editmode': false
						}[mode]}
           
           /> 
          <br />

          <TextField
            multiline
            rows={3}
            value={desc1}
            type="text"
            placeholder="Description"
            name="desc"
            onChange={(e) => descchange(e)}
            className="desc"
            disabled={{
							'viewmode': true,
							'addmode': false,
							'editmode': false
						}[mode]}
          />

          <div style={{ flexDirection: "row" }}>
            
          <Button
            className="add"
            variant="contained"
            onClick={() => addclick()}
            >
          {/* Switch for params */}
						{{
							'viewmode': 'Close',
							'addmode': 'Add',
							'editmode': 'Update'
						}[mode]}

            </Button> 
          </div>
        </Box>


      </div>
      
    </div>
  );
};

export default Todo;


