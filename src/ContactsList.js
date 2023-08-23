import React, { useState, useEffect } from "react";

function ContactsList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div className="container mt-5">
      {/* For large screens: Table */}
      <div className="d-none d-lg-block">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* For small screens: Cards */}
      <div className="d-lg-none">
        {contacts.map((contact) => (
          <div className="card mb-4" key={contact.id}>
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">{contact.email}</p>
              <p className="card-text">{contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsList;