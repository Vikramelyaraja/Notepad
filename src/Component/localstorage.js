import React, { useRef, useState } from "react";

function LocalStorage(){
    const data=useRef();
    const handleClick=()=>{
        console.log(data.current.value,"initial value")
        localStorage.setItem("inputValue",data.current.value)
    }
    console.log(localStorage.getItem("inputValue"),"****")

    const [name,setName]=useState();
    return(
        <>
            <input ref={data} />
            <button onClick={handleClick}>Add</button>
            <div>{localStorage.getItem("inputValue")}</div>
        </>
    );
}
export default LocalStorage;