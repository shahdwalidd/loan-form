import "./Formloan.css";
export default function Modal() {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>The form has been submitted successfully</h2>
        <button className="close-btn">OK</button>
      </div>
    </div>
  );
}


