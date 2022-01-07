import react from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  TextFieldTop: {
    marginTop: 10,
  },

  textFieldBottom: {
    marginTop: 10,
  },
  heading1: {
    fontSize: 30,
  },
  cvText: {
    display: "block",
    fontSize: 20,
  },
  cvTextBold: {
    fontWeight: "bold",
  },
});

export default function General() {
  const classStyling = useStyles();

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
          <div className={classStyling.TextFieldTop}>
            <Typography
              variant="h1"
              style={{ fontSize: 40, marginBottom: 20, textAlign: "center" }}
            >
              General Information
            </Typography>
            <TextField
              color="primary"
              focused
              label="firstname"
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="enter first name"
              onChange={handleChange}
              style={{ marginRight: 75 }}
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
          </div>
          <div className={classStyling.textFieldBottom}>
            <TextField
              color="primary"
              focused
              label="number"
              type="number"
              name="PhoneNum"
              value={formData.PhoneNum}
              placeholder="enter number"
              onChange={handleChange}
              style={{ marginRight: 75 }}
              varient="filled"
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
          </div>
          <Button
            variant="outlined"
            size="large"
            onClick={btnToggle}
            style={{ marginTop: 10 }}
          >
            Save
          </Button>
        </div>
      </form>

      <div className="formInfo" style={styletogg}>
        <Typography
          variant="h1"
          style={{ fontSize: 40, marginBottom: 20, textAlign: "center" }}
        >
          General Information
        </Typography>

        <Typography variant="p" className={classStyling.cvText}>
          <Typography variant="p" className={classStyling.cvTextBold}>
            First Name:{" "}
          </Typography>{" "}
          {formData.firstName}
        </Typography>
        <Typography variant="p" className={classStyling.cvText}>
          <Typography variant="p" className={classStyling.cvTextBold}>
            Last Name:{" "}
          </Typography>{" "}
          {formData.secondName}
        </Typography>
        <Typography variant="p" className={classStyling.cvText}>
          <Typography variant="p" className={classStyling.cvTextBold}>
            Phone Number:{" "}
          </Typography>{" "}
          {formData.PhoneNum}
        </Typography>
        <Typography variant="p" className={classStyling.cvText}>
          <Typography variant="p" className={classStyling.cvTextBold}>
            Email Address:{" "}
          </Typography>{" "}
          {formData.emailAddress}
        </Typography>

        <Button
          variant="outlined"
          size="large"
          onClick={btnToggle}
          style={{ marginTop: 10 }}
        >
          Edit
        </Button>
      </div>
    </div>
  );
}
