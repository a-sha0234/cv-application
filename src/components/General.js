import react from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function General() {
  const [toggle, setToggle] = react.useState(false);

  const [formData, setFormData] = react.useState({
    firstName: "",
    secondName: "",
    PhoneNum: "",
    emailAddress: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function btnToggle() {
    setToggle((prevState) => {
      return !prevState;
    });
  }

  const style = {
    display: toggle === false ? "block" : "none",
  };

  const styletogg = {
    display: toggle === true ? "block" : "none",
  };

  return (
    <div className="general">
      <form>
        <div style={style}>
          <TextField
            color="primary"
            focused
            label="firstname"
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="enter first name"
            onChange={handleChange}
          />

          <TextField
            color="primary"
            focused
            label="lastname"
            type="text"
            name="secondName"
            value={formData.secondName}
            placeholder="enter last name"
            onChange={handleChange}
          />

          <TextField
            color="primary"
            focused
            label="number"
            type="number"
            name="PhoneNum"
            value={formData.PhoneNum}
            placeholder="enter number"
            onChange={handleChange}
          />
          <TextField
            type="text"
            label="email"
            color="primary"
            focused
            placeholder="enter email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
          />
          <Button variant="outlined" size="large" onClick={btnToggle}>
            Save
          </Button>
        </div>
      </form>

      <div className="formInfo" style={styletogg}>
        <h1>General Information </h1>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.secondName}</p>
        <p>Phone number: {formData.PhoneNum}</p>
        <p> Email address: {formData.emailAddress}</p>
        <Button variant="outlined" size="large" onClick={btnToggle}>
          Edit
        </Button>
      </div>
    </div>
  );
}
