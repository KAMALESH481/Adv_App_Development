import React, { useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
const AddItems = ({addItems,setAddItems,handleAdd}) => {
  const InputRef=useRef();
  return (
    <div>
    <input type='text'
    ref={InputRef}
    placeholder='Additems'
    value={addItems}
    onChange={(e)=>setAddItems(e.target.value)}
    ></input>
    <AddIcon 
    onClick={()=> InputRef.current.focus()}
    onDoubleClick={handleAdd}/>
    </div>
  )
}

export default AddItems