import Button from "@mui/material/Button";
import React from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";

export default function Experience() {
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

  const [saveBtn, setSaveBtn] = React.useState(false);

  function handleSave() {
    setSaveBtn((prevState) => {
      return !prevState;
    });
  }

  const hideStyle = {
    display: saveBtn === true ? "none" : " block",
  };

  const revealStyle = {
    display: saveBtn === true ? "block" : "none",
  };

  return (
    <main>
      <form>
        <div style={hideStyle}>
          <TextField
            color="primary"
            focused
            label="Company name"
            type="text"
            placeholder="enter name of company"
            name="CompanyName"
            value={formExperience.CompanyName}
            onChange={handleFormChange}
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
          <TextField
            color="primary"
            focused
            label="start date"
            type="date"
            placeholder="enter start date"
            name="startDate"
            value={formExperience.startDate}
            onChange={handleFormChange}
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
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="enter details of your role"
            style={{ width: 200, height: 100 }}
            name=" roleDetails"
            value={formExperience.roleDetails}
            onChange={handleFormChange}
          />
        </div>
        <Button
          variant="outlined"
          size="large"
          onClick={handleSave}
          style={{ marginRight: "80px", marginTop: "20px" }}
        >
          {saveBtn === false ? "save" : "edit"}
        </Button>
      </form>
      <section style={revealStyle}>
        <Typography variant="p">
          Company name:{formExperience.CompanyName}
        </Typography>
        <Typography variant="p">
          Position title:{formExperience.positionTitle}
        </Typography>
      </section>
    </main>
  );
}
