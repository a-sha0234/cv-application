import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Button from "@mui/material/Button";
import "./style/style.scss";
import React from "react";

function App() {
  //----------------------------------------------------------------------------------------------------------
  //handle education component
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

  return (
    <main>
      <div>
        <General />
        <div className="education-header">
          <h1>Education</h1>
          <Button variant="outlined" size="large" onClick={addEducationInfo}>
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
