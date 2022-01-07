//imports
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Button from "@mui/material/Button";
import "./style/style.scss";
import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";

function App() {
  //----------------------------------------------------------------------------------------------------------
  //handle education component
  //----------------------------------------------------------------------------------------------------------
  const [education, setEducation] = React.useState([]); //state to work out how many components to render

  function addEducationInfo() {
    //called when add is clicked
    setEducation((prev) => {
      return [...prev, {}];
    });
  }

  const educationComp = education.map((num) => {
    //map over array and render the component for education section
    return <Education />;
  });
  //----------------------------------------------------------------------------------------------------------
  //handle expierence component
  //----------------------------------------------------------------------------------------------------------

  const [expierence, setExperience] = React.useState([]);

  function addExperiance() {
    setExperience((prev) => {
      return [...prev, {}];
    });
  }

  const expierenceComp = expierence.map((num) => {
    return <Experience />;
  });

  //----------------------------------------------------------------------------------------------------------
  // JSX returned, call components and export component
  //----------------------------------------------------------------------------------------------------------
  return (
    <main className="container">
      <div>
        <General />
        <div className="education-header">
          <Typography
            variant="h1"
            style={{ fontSize: 40, marginBottom: 20, textAlign: "center" }}
          >
            Education
          </Typography>
          <Button
            variant="outlined"
            size="large"
            onClick={addEducationInfo}
            style={{ marginBottom: 20 }}
          >
            Add
          </Button>
        </div>
        {educationComp}

        <h1>Experience</h1>
        <Button variant="outlined" size="large" onClick={addExperiance}>
          Add
        </Button>
        {expierenceComp}
      </div>
    </main>
  );
}

export default App;
