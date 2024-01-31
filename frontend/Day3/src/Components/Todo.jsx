import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddItems from './AddItems';
import Search from './Search';

const Todo = ({items,setitems,handleClick,handlechange}) => {
    const [addItems,setAddItems]=useState('');
    const handleAdd=(e)=>{
        if(!addItems) return;
        setAddItems('');
        const id=items.length ? items[items.length-1].id+1 :1;
        const list={id,check:false,label:addItems};
        const newlist=[...items,list];
        setitems(newlist);
        localStorage.setItem("todo",JSON.stringify(newlist));
    }
   
  return (
    <div>
    <AddItems 
    addItems={addItems}
    setAddItems={setAddItems}
    handleAdd={handleAdd}
    />
      {items.map((tech)=>(
        <li key={tech.id}>
         <input type='checkbox'
         onChange={()=>handlechange(tech.id)}
                checked={tech.check}/>
                <label>{tech.label}</label>
                <DeleteIcon 
                role="button"
                onClick={()=>handleClick(tech.id)}/>
        </li>
      ))
      }
      </div>
  )
}

export default Todo