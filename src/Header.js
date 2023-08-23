import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light contacts-header">
      <div className="container-fluid justify-content-center">
        <div className="navbar-brand">
          <i className="bi bi-person-circle"></i> Contacts
        </div>
      </div>
    </nav>
  );
}

export default Header;