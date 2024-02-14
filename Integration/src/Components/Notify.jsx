import React from 'react'
import "./Notify.css"
const Notify = ({note}) => {

  return (
    <>
    <div className='dis' style={{backgroundColor:"green"}}>Your Application for the {note.company} for the role of {note.title} is Accepted</div>
    {localStorage.getItem("coms")}
    </>
  )
}

export default Notify