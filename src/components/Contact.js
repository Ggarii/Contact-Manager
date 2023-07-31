const Contact = (props) => {
  return (
    <>
      <div className="contact">
        {props.data.name}
        <br></br>
        {props.data.number}
        <br></br>
        {props.data.location}
        <br></br>
      </div>
    </>
  );
};
export default Contact;
