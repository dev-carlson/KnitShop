import React, { useState } from "react";
import "../styles/Footer.css";
import TermsAndCondition from "../routers/TermsAndCondition";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Footer() {
  const [text, setText] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleClear = () => {
    setText("");
  };
  const submitToastSuccess = () =>
    toast.success("Email Sent!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const submitToastUnsuccess = () =>
    toast.error("Please enter a valid email address", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked && text.includes("@")) {
      submitToastSuccess();
    } else if (!text.includes("@")) {
      submitToastUnsuccess();
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <h1>info</h1>
      <p className="info">Flagship Store location & hours</p>
      <p className="info">Gammeltorv 6, 1st floor</p>
      <p className="info">1457 Copenhagen, Denmark</p>
      <p className="info">Weekdays - 10:00 - 18:00</p>
      <p className="info">Saturdays - 10:00 - 16:00</p>
      <div className="terms-condition">
        <form>
          <div>
            <textarea
              className="text-area"
              placeholder="Enter your Email here"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                }
              }}
            ></textarea>
            {isChecked ? (
              <button
                className="submit-button"
                type="submit"
                onClick={handleSubmit}
                required
              >
                Submit
              </button>
            ) : (
              <button
                className="clear-button"
                type="submit"
                onClick={handleClear}
              >
                Clear
              </button>
            )}
          </div>

          <label>
            <input type="checkbox" onChange={handleCheckboxChange} required />I
            agree to the terms and conditions
          </label>
        </form>
        <div className="footer-link">
          <Link to="TermsAndCondition"> Terms</Link>
          <Link to="CareAndRepair">Care & Repair</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
