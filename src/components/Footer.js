import React from "react";
import("../css/footer.css");

function Footer({ onModalOpen }) {
  return (
    <footer className="down-buttons">
      <button type="link" className="btn-down home-page-link shadow-mid-dark">
        <a href="https://codencja.herokuapp.com/">Back to Home Page</a>
      </button>

      <p>
        {" "}
        <b>&copy; 2021 </b>
        <i>by</i> <strong>Codencja</strong>
      </p>
      <button
        type="button"
        className="btn btn-down shadow-mid-dark"
        onClick={() => onModalOpen(true)}
      >
        Code info
      </button>
    </footer>
  );
}

export default React.memo(Footer);
