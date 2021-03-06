//imports
import Button from "@mui/material/Button";
import React from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";
import { red } from "@mui/material/colors";
import { flexbox } from "@mui/system";

//---------------------------------------------------------------------------------------------
// material ui styles
//---------------------------------------------------------------------------------------------

const useStyles = makeStyles({
  TextFieldTop: {
    marginTop: 10,
  },

  textFieldBottom: {
    marginTop: 20,
  },
  cvText: {
    display: "block",
    fontSize: 20,
    marginTop: 10,
  },
  cvTextBold: {
    fontWeight: "bold",
  },

  textArea: {
    display: "flex",
    justifyContent: "center",
    margin: 10,
  },
});

export default function Experience() {
  //invoke useStyles hook
  const classes = useStyles();

  //---------------------------------------------------------------------------------------------
  // handle form data
  //---------------------------------------------------------------------------------------------

  const [formExperience, setFormExperience] = React.useState({
    CompanyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    roleDetails: "",
  });

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormExperience((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
  }
  console.log(formExperience.roleDetails);
  //---------------------------------------------------------------------------------------------
  // handle delete functionality
  //---------------------------------------------------------------------------------------------
  const [deleteBtn, setDeleteBtn] = React.useState(true);

  function handleDelete() {
    //function allows users to delete a form
    setDeleteBtn((prevState) => {
      return false;
    });
  }

  //---------------------------------------------------------------------------------------------
  // handle saving the data and editing it
  //---------------------------------------------------------------------------------------------

  const [saveBtn, setSaveBtn] = React.useState(false); //state fpr saving or editing component

  function handleSave() {
    setSaveBtn((prevState) => {
      return !prevState;
    });
  }

  const hideStyle = {
    // object used for storing css to hide the form
    display: saveBtn === true ? "none" : " block",
  };

  const revealStyle = {
    // object used to store css to hide the entered data
    display: saveBtn === true ? "block" : "none",
  };
  //---------------------------------------------------------------------------------------------
  // return JSX
  //---------------------------------------------------------------------------------------------
  return (
    <main>
      {/* form textfields which allowe user to input, conditional rendering used here to handle the delete button  */}
      {deleteBtn && (
        <form>
          <div style={hideStyle}>
            <div className={classes.TextFieldTop}>
              <TextField
                color="primary"
                focused
                label="Company name"
                type="text"
                placeholder="enter name of company"
                name="CompanyName"
                value={formExperience.CompanyName}
                onChange={handleFormChange}
                style={{ marginRight: 75 }}
              />
              <TextField
                color="primary"
                focused
                label="Position of title"
                type="text"
                placeholder="enter title "
                name="positionTitle"
                value={formExperience.positionTitle}
                onChange={handleFormChange}
              />
            </div>

            <div className={classes.textFieldBottom}>
              <TextField
                color="primary"
                focused
                label="start date"
                type="date"
                placeholder="enter start date"
                name="startDate"
                value={formExperience.startDate}
                onChange={handleFormChange}
                style={{ marginRight: 105 }}
              />
              <TextField
                color="primary"
                focused
                label="end date"
                type="date"
                placeholder="enter finishing date "
                name="endDate"
                value={formExperience.endDate}
                onChange={handleFormChange}
              />
            </div>
            <div className={classes.textArea}>
              <TextareaAutosize
                placeholder="enter details of your role"
                style={{ width: 200, height: 100 }}
                name="roleDetails"
                value={formExperience.roleDetails}
                onChange={handleFormChange}
                className={classes.textArea}
              />
            </div>
          </div>

          <Button
            variant="outlined"
            size="large"
            onClick={handleSave}
            style={{ marginRight: "80px", marginTop: "20px" }}
          >
            {saveBtn === false ? "save" : "edit"}
          </Button>
          <Button
            variant="outlined"
            size="large"
            style={{ marginRight: "80px", marginTop: "20px" }}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </form>
      )}
      {/* conditional rendering, saved form displayed   */}
      {deleteBtn && (
        <section style={revealStyle}>
          <Typography variant="p" className={classes.cvText}>
            <Typography variant="p" className={classes.cvTextBold}>
              Company Name:{" "}
            </Typography>{" "}
            {formExperience.CompanyName}
          </Typography>

          <Typography variant="p" className={classes.cvText}>
            <Typography variant="p" className={classes.cvTextBold}>
              Position Title:{" "}
            </Typography>{" "}
            {formExperience.positionTitle}
          </Typography>

          <Typography variant="p" className={classes.cvText}>
            <Typography variant="p" className={classes.cvTextBold}>
              From:{" "}
            </Typography>{" "}
            {formExperience.startDate}
          </Typography>

          <Typography variant="p" className={classes.cvText}>
            <Typography variant="p" className={classes.cvTextBold}>
              To:{" "}
            </Typography>{" "}
            {formExperience.endDate}
          </Typography>

          <Typography variant="p" className={classes.cvText}>
            <Typography variant="p" className={classes.cvTextBold}>
              Details of my role:{" "}
            </Typography>{" "}
            {formExperience.roleDetails}
          </Typography>
        </section>
      )}
    </main>
  );
}
