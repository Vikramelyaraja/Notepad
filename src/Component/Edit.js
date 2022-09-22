import React from "react";
import {useEffect,useState} from 'react'

function Edit(){
    const [title,setTitle]=useState("")
    const [allData,setAllData]=useState([])
    const [show,setShow]=useState(false)
    const [editIndex,setEditIndex]=useState()

    const handleAdd=()=>{
       

        setAllData((oldData) => {
        
            return ([...oldData,title])
          
          })
        setTitle("")
       
       
    }

    
    useEffect(() => {
         
        

     
     }, []);

    const handleDelete=(index)=>{
        allData.splice(index,1)
        setAllData([...allData])
    }

    const handleEdit=(i)=>{
        setTitle(allData[i])
        setShow(true)
        setEditIndex(i)
    }
    const handleUpdate=()=>{
        allData.splice(editIndex,1,title)
        setAllData([...allData])
        setShow(false)
        setTitle("")
        
    }
    
    return(
        <div>
            <h2>CRUD Insert, Update and Delete</h2>
            <input value={title} placeholder='Title' onChange={(e)=>setTitle(e.target.value)} /><br/>
            {!show?<button onClick={handleAdd}>Add</button>:
            <button onClick={handleUpdate}>Update</button>}

            {
                allData.map((val,i)=>
                <div>
                    <h1>{val}</h1>
                   
                    <button className="edit" onClick={()=>handleEdit(i)} >Edit</button>
                    <button className="delete" onClick={()=>handleDelete(i)}>Delete</button>
                </div>
                )
            }
        </div>
    );
}
export default Edit; 