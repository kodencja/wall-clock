import React from "react";
import("../css/footer.css");

function Footer({ onModalOpen }) {
  return (
    <footer className="down-buttons">
      <button type="link" className="btn-down home-page-link">
        <a href="https://codencja.herokuapp.com/">Back to Home Page</a>
      </button>

      <p>
        {" "}
        &copy; 2021 <i>by</i> <strong>Codencja</strong>
      </p>
      <button
        type="button"
        className="btn btn-down"
        onClick={() => onModalOpen(true)}
      >
        Code info
      </button>
    </footer>
  );
}

export default React.memo(Footer);
