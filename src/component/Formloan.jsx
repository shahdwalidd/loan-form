import "./Formloan.css";
import Modal from "./Modal.jsx";
import { useState } from "react";

export default function Formloan() {
  const [loaninput, setloaninput] = useState({
    Name: "",
    PhoneNumber: "",
    Age: "",
    isemployee: false,
    salary: ""
  });

  const [showmodel, setmodel] = useState(false);
  const [errmessage, seterrmessage] = useState(null);

  const isformvalid =
    loaninput.Name.trim() !== "" &&
    loaninput.PhoneNumber.trim() !== "" &&
    loaninput.Age.trim() !== "" &&
    loaninput.salary.trim() !== "" &&
    loaninput.isemployee === true;
function handlesubmit(event) {
  event.preventDefault();

  const Age = Number(loaninput.Age);
  const phone = loaninput.PhoneNumber;

  let errors = [];

  
  if (Age < 18 || Age > 100) {
    errors.push("❌ Age must be between 18 and 100");
  }


  if (phone.length < 10 || phone.length > 12) {
    errors.push("❌ Phone number must be 10 to 12 digits");
  }


  if (errors.length > 0) {
    seterrmessage(errors.join("\n"));
    setmodel(true);
    return;
  }

 
  seterrmessage("✔ The form has been submitted successfully!");
  setmodel(true);
}

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Loan Application</h2>

      <form onSubmit={handlesubmit}>
        <label>Name</label>
        <input
          value={loaninput.Name}
          onChange={(e) =>
            setloaninput({ ...loaninput, Name: e.target.value })
          }
          type="text"
          id="nameinput"
        />

        <label>Phone Number</label>
        <input
          value={loaninput.PhoneNumber}
          onChange={(e) =>
            setloaninput({ ...loaninput, PhoneNumber: e.target.value })
          }
          type="text"
          id="phone-number"
        />

        <label>Age</label>
        <input
          value={loaninput.Age}
          onChange={(e) =>
            setloaninput({ ...loaninput, Age: e.target.value })
          }
          type="number"
          id="age"
        />

        <label>Are you an employee?</label>
        <input
          checked={loaninput.isemployee}
          onChange={(e) =>
            setloaninput({ ...loaninput, isemployee: e.target.checked })
          }
          type="checkbox"
          id="check-emp"
        />

        <label>Salary</label>
        <select
          value={loaninput.salary}
          onChange={(e) =>
            setloaninput({ ...loaninput, salary: e.target.value })
          }
        >
          <option value="">Select salary</option>
          <option value="less">less than 500$</option>
          <option value="mid">between 500$ and 2000$</option>
          <option value="high">above 2000$</option>
        </select>

        <button type="submit" disabled={!isformvalid}>
          Submit
        </button>
      </form>

      {/* Modal */}
      <Modal
        errmessage={errmessage}
        isvisable={showmodel}
        closeModal={() => setmodel(false)}
      />
    </div>
  );
}
