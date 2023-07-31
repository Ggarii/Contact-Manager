import React, { useState } from "react";
import Contact from "./components/Contact";
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";
import NavBar from "./components/NavBar";
const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    setContacts([...contacts, contactData]);
    localStorage.setItem(
      "contacts",
      JSON.stringify([...contacts, contactData])
    );
  };
  const clearAllContacts = () => {
    localStorage.clear();
    setContacts([]);
  };

  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="contact_list">
        <h3>Contact List:</h3>
        {contacts.map((data) => (
          <Contact key={data.id} data={data} />
        ))}
        <button onClick={clearAllContacts} style={{ background: "#cc0800" }}>
          Clear all contacts
        </button>
      </div>
    </>
  );
};

export default App;
