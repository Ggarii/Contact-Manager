import { useState } from "react";
const ContactAdder = (props) => {
  // states for inputs
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = {
      id: Math.random(),
      name: name,
      number: mobile,
      location,
    };
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Please fill all the fields!");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };
  return (
    <>
      <div className="simpleAdder">
        <h3>Contact Adder:</h3>
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            value={name}
            placeholder="Contact Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            value={mobile}
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="locaion"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <button>Add Contact</button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
