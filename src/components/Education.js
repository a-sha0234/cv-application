import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Education(props) {
  const [formDataEducation, setFormDataEducation] = React.useState({
    schoolName: "",
    courseName: "",
    dateStarted: "",
    id: props.id,
  });

  function SaveEducation(event) {
    console.log(event.target.id);
  }

  return (
    <div>
      <form>
        <div key={props.id}>
          <TextField
            color="primary"
            focused
            label="School Name"
            type="text"
            placeholder="enter school name"
            name="schoolName"
          />
          <TextField
            color="primary"
            focused
            label="Course name"
            type="text"
            placeholder="enter Course"
            name="courseName"
          />
          <TextField color="primary" focused label="Date started" type="date" />
          <TextField
            color="primary"
            focused
            label="Date finished"
            type="date"
          />
          <Button
            variant="outlined"
            size="large"
            onClick={SaveEducation}
            id={props.id}
          >
            save
          </Button>
        </div>
      </form>
    </div>
  );
}
