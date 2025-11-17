import "./Formloan.css";
export default function Formloan(){
return( 
    <div className="form-wrapper">
      <h2 className="form-title">Loan Application</h2>

  <form action="">
     <label> Name</label><input type="text" name="p" id="nameinput" />
   <label>Phone Number</label> <input type="text" name="" id="phone-number" />
   <label>Age</label> <input type="number" name="" id="age" />
    <label>Are you an employee?</label> <input type="checkbox" name="" id="check-emp" />
     <label>salary</label> <input type="number" name="" id="salary" />
         <button type="submit">Submit</button>
  </form>









</div>
);


}