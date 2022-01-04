import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { handleBreakpoints } from "@mui/system";

export default function Education() {
  const [formDataEducation, setFormDataEducation] = React.useState({
    schoolName: "",
    courseName: "",
    dateStarted: "",
    dateFinished: "",
  });

  const [btn, setBtn] = React.useState(false);

  function SaveEducation() {
    setBtn((prevState) => {
      return !prevState;
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormDataEducation((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  const hideStyle = {
    display: btn === true ? "none" : " block",
  };

  const revealStyle = {
    display: btn === true ? "block" : "none",
  };

  return (
    <div className="education-card">
      <form>
        <div style={hideStyle}>
          <div className="education-card-top-fields">
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

          <div className="education-card-bottom-fields">
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
          {btn === false ? "save" : "edit"}
        </Button>
      </form>
      <section style={revealStyle}>
        {/* this section only shows when the user clicks save  */}
        <p>School Name: {formDataEducation.schoolName}</p>
        <p> Course Name: {formDataEducation.courseName}</p>
        <p>Date started: {formDataEducation.dateStarted}</p>
        <p>Date finished: {formDataEducation.dateFinished}</p>
      </section>
    </div>
  );
}
