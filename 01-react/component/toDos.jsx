import React from "react";
import './toDos.css'
const toDos=(props )=>{
    const content =props.list.map((list,index)=>(
        <div className="box">
            <h3 key={list.id} >
                {list.id}:{list.item}
            </h3>
        </div>
    ));
return(
    <>
    <h2>TODO Title</h2>
    <div className="mainbox">
        {content}
    </div>
    
    </>
);

};
export default toDos;




