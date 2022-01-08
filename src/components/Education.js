//imports
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";

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
});

// start of the Education component
export default function Education() {
  // invoke the useStyles hook
  const classStyles = useStyles();

  //---------------------------------------------------------------------------------------------
  // handle form data
  //---------------------------------------------------------------------------------------------

  const [formDataEducation, setFormDataEducation] = React.useState({
    schoolName: "",
    courseName: "",
    dateStarted: "",
    dateFinished: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormDataEducation((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  //---------------------------------------------------------------------------------------------
  // handle save functionality
  //---------------------------------------------------------------------------------------------

  //state to handle the
  const [btn, setBtn] = React.useState(false);

  function SaveEducation() {
    setBtn((prevState) => {
      return !prevState;
    });
  }

  const hideStyle = {
    display: btn === true ? "none" : " block",
  };

  const revealStyle = {
    display: btn === true ? "block" : "none",
  };

  //---------------------------------------------------------------------------------------------
  // handle Delete functionality
  //---------------------------------------------------------------------------------------------

  const [deleteBtn, setDeleteBtn] = React.useState(true);

  function handleDeleteBtn() {
    setDeleteBtn(false);
  }

  //---------------------------------------------------------------------------------------------
  // Jsx returned, create form and display of information
  //---------------------------------------------------------------------------------------------

  return (
    <main>
      {deleteBtn && (
        <div className="education-card">
          <form>
            <div style={hideStyle}>
              <div className={classStyles.TextFieldTop}>
                <TextField
                  color="primary"
                  focused
                  label="School Name"
                  type="text"
                  placeholder="enter school name"
                  name="schoolName"
                  value={formDataEducation.schoolName}
                  onChange={handleChange}
                  style={{ marginRight: "80px" }}
                />
                <TextField
                  color="primary"
                  focused
                  label="Course name"
                  type="text"
                  placeholder="enter Course"
                  name="courseName"
                  onChange={handleChange}
                  value={formDataEducation.courseName}
                />
              </div>

              <div className={classStyles.textFieldBottom}>
                <TextField
                  color="primary"
                  focused
                  label="Date started"
                  type="date"
                  name="dateStarted"
                  value={formDataEducation.dateStarted}
                  onChange={handleChange}
                  style={{ marginRight: "110px" }}
                />
                <TextField
                  color="primary"
                  focused
                  label="Date finished"
                  type="date"
                  name="dateFinished"
                  value={formDataEducation.dateFinished}
                  onChange={handleChange}
                  style={{ marginRight: "80px" }}
                />
              </div>
            </div>
            <Button
              variant="outlined"
              size="large"
              onClick={SaveEducation}
              style={{ marginRight: "80px", marginTop: "20px" }}
            >
              {btn === false ? "Save" : "Edit"}
            </Button>
            <Button
              variant="outlined"
              size="large"
              style={{ marginRight: "80px", marginTop: "20px" }}
              onClick={handleDeleteBtn}
            >
              Delete
            </Button>
          </form>
          <section style={revealStyle}>
            {/* this section only shows when the user clicks save  */}

            <Typography variant="p" className={classStyles.cvText}>
              <Typography variant="p" className={classStyles.cvTextBold}>
                School Name:{" "}
              </Typography>{" "}
              {formDataEducation.schoolName}
            </Typography>

            <Typography variant="p" className={classStyles.cvText}>
              <Typography variant="p" className={classStyles.cvTextBold}>
                Course Name:{" "}
              </Typography>{" "}
              {formDataEducation.courseName}
            </Typography>

            <Typography variant="p" className={classStyles.cvText}>
              <Typography variant="p" className={classStyles.cvTextBold}>
                Date Started:{" "}
              </Typography>{" "}
              {formDataEducation.dateStarted}
            </Typography>

            <Typography variant="p" className={classStyles.cvText}>
              <Typography variant="p" className={classStyles.cvTextBold}>
                Date Finished:{" "}
              </Typography>{" "}
              {formDataEducation.dateFinished}
            </Typography>
          </section>
        </div>
      )}
    </main>
  );
}

//---------------------------------------------------------------------------------------------
// End of component
//---------------------------------------------------------------------------------------------
