import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";

const Todo = () => {

  const { state } = useLocation();
  const {mode}=useParams();
  const [title1, setTitle1] = useState(state?.title?state.title :'');
  const [desc1, setDesc1] = useState(state?.desc?state.desc :'');
  const [show,setShow] = useState(state);
  const [view ,setView]= useState(mode);

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

  }, []);

  if(mode ==='viewmode'){
    disabled=true;
    name="Close"
  }
  else if(mode==='editmode'){
    name="update"
  }

  else {
    disabled=false;
    name="Add"
  }

  const titlechange = (e) => {
    setTitle1(e.target.value);
  };

  const descchange = (e) => {
    setDesc1(e.target.value);
  };

  const addclick = (e) => {

    if(mode ==="editmode"){
      const update = [{ id: taskList.length + 1, title: title1, desc: desc1 }];
      navigate('/Home',{state:update});
      name="Update"
      disabled='false';

    }else if(mode==='viewmode'){
      const view = [{ id: taskList.length + 1, title: title1, desc: desc1 }];
      navigate('/Home',{state:view});
      name="Close"
      disabled='true';

    }else if(mode ==='addmode'){
      if (title1 === "") {
        Swal.fire({ icon: "warning", text: "Enter Title" });
      } else if (desc1 === "") {
        Swal.fire({ icon: "warning", text: "Enter Description" });
      } else {
        const tempre = [{ id: taskList.length + 1, title: title1, desc: desc1 }];
  
        Swal.fire("Thank You!", "Successfully added your Task!", "success");
        navigate('/Home', { state:tempre });
      }
      setTitle1('');
      setDesc1('');

    }else{

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
            disabled={disabled}
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
            disabled={disabled}
          />

          <div style={{ flexDirection: "row" }}>
            
          <Button
            className="add"
            variant="contained"
            onClick={() => addclick()}
            >
          {name}
            </Button>

          </div>
        </Box>

      </div>
    </div>
  );
};

export default Todo;


