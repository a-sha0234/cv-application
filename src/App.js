import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Button from "@mui/material/Button";
import "./style/style.scss";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [education, setEducation] = React.useState([]);

  function addEducationInfo() {
    setEducation((prev) => {
      return [
        ...prev,
        {
          key: nanoid(),
        },
      ];
    });
  }

  console.log(education);

  const educationComp = education.map((num) => {
    return <Education id={num.key} />;
  });

  return (
    <main>
      <div>
        <General />
        <h1>Education</h1>
        <Button variant="outlined" size="large" onClick={addEducationInfo}>
          Add
        </Button>
        {educationComp}

        <h1>Experience</h1>
        <Button variant="outlined" size="large">
          Add
        </Button>
      </div>
    </main>
  );
}

export default App;
