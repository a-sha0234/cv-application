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

  return (
    <form>
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
        className="textfields"
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
        className="textfields"
      />
      <Button variant="outlined" size="large" onClick={btnToggle}>
        Save
      </Button>
    </form>
  );
}
