import React, { useState } from "react";
import "../styles/Footer.css";
import TermsAndCondition from "../routers/TermsAndCondition";
import { Link } from "react-router-dom";
function Footer() {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="terms-condition">
      <h1>info</h1>
      <p className="info">
        Flagship Store location & hours Gammeltorv 6, 1st floor 1457 Copenhagen,
        Denmark Weekdays - 10:00 - 18:00 Saturdays - 10:00 - 16:00
      </p>
      <textarea
        className="text-area"
        placeholder="Join our newsletter"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
          }
        }}
      ></textarea>
      {text ? (
        <button className="clear-button" type="submit" onClick={handleClear}>
          Clear
        </button>
      ) : (
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      )}
      <form>
        <label>
          <input type="checkbox" required />I agree to the terms and conditions
        </label>
      </form>
      <div className="footer-link">
        <Link to="TermsAndCondition"> Terms</Link>
        <Link to="CareAndRepair">Care & Repair</Link>
      </div>
    </div>
  );
}

export default Footer;
