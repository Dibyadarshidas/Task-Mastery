import React, { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import SendIcon from "@material-ui/icons/Send";
export default function Create() {
  const [formDetails, setDetails] = useState({});

  const handleChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setDetails({ ...formDetails, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails)
  }

  return (
    <Container>
      <Typography variant="h4" color="primary" gutterBottom>
        Create Tasks
      </Typography>

      <form autoComplete="off" noValidate>
        <TextField
          onChange={handleChange}
          required
          name="title"
          id="outlined-required"
          label="Title"
          variant="outlined"
          value={formDetails.name}
          fullWidth
        />
        <br />
        <br />
        <TextField
          onChange={handleChange}
          required
          name="description"
          id="outlined-required"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={formDetails.description}
          fullWidth
        />
        <br />
        <br />
        <FormControl
          value={formDetails.gender}
          onChange={handleChange}
          component="fieldset"
        >
          <FormLabel component="legend">Issue</FormLabel>
          <RadioGroup aria-label="Issue" name="issue">
            <FormControlLabel value="top" control={<Radio />} label="Top" />
            <FormControlLabel value="mid" control={<Radio />} label="Mid" />
            <FormControlLabel value="low" control={<Radio />} label="Low" />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Create
        </Button>
      </form>
    </Container>
  );
}
