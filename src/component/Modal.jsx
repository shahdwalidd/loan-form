import "./Formloan.css";

export default function Modal({ isvisable, closeModal, errmessage }) {
  if (!isvisable) return null;

  const isError = errmessage && errmessage.startsWith("❌");

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2 style={{ color: isError ? "red" : "green" }}>
          {errmessage || "The form has been submitted successfully"}
        </h2>

        <button className="close-btn" onClick={closeModal}>
          OK
        </button>
      </div>
    </div>
  );
}
