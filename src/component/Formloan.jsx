import "./Formloan.css";
import Modal from "./Modal.jsx"
import { useState } from "react";
export default function Formloan(){
    const [loaninput,setloaninput] =useState({
         Name:"",
         PhoneNumber:"",
         Age:"",
isemployee: false,

salary:""

    })
    const isformvalid=
    loaninput.Name.trim()!="" &&
      loaninput.PhoneNumber.trim()!="" &&
        loaninput.Age.trim()!="" &&
          loaninput.salary.trim()!="" &&
          loaninput.isemployee === true;

return( 
    <div className="form-wrapper">
      <h2 className="form-title">Loan Application</h2>

  <form action="">
     <label> Name</label><input  value ={loaninput.Name} onChange={(event)=>{
        setloaninput({...loaninput,Name:event.target.value})
     }}   type="text" name="" id="nameinput" />
   <label>Phone Number</label> <input value={loaninput.PhoneNumber} onChange={(event)=>{
    setloaninput({...loaninput,PhoneNumber:event.target.value})
   }} type="text" name="" id="phone-number" />
   <label>Age</label> <input value={loaninput.Age} onChange={(event)=>{
    setloaninput({...loaninput,Age:event.target.value})
   }} type="text" name="" id="age" />
    <label>Are you an employee?</label> <input checked={loaninput.isemployee} onChange={(event)=>{
        setloaninput({ ...loaninput, isemployee: event.target.checked})
    }} type="checkbox" name="" id="check-emp" />
     <label>salary</label> <select value={loaninput.salary} onChange={(event)=>{
        setloaninput({...loaninput,salary:event.target.value})
     }} id=" selector" >
        <option > less than 500$</option>
          <option >between 500$ and 2000$</option>
            <option > above 2000$</option>
     </select>
         <button type="submit" disabled={!isformvalid}>Submit</button>
  </form>
  {/* <Modal/> */}









</div>
);


}