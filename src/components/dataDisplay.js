import React, { useState, useRef } from "react";
import { Card, Image, Img } from "./dataDisplayStyles";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import uniqid from "uniqid";

import "../style.css";

const DataDisplay = ({ student, updateTag }) => {
  const [expandSetting, setExpand] = useState(false);
  const [input, setInput] = useState("");
  const average = () => {
    const sum = student.grades.reduce((acc, num) => parseInt(num) + acc, 0);
    const avg = sum / student.grades.length;
    return avg;
  };

  const handleExpand = () => {
    setExpand(!expandSetting);
  };

  const handleUpdate = (e) => {
    setInput(e.target.value);
  };

  const submitInput = (student) => {
    if (input.length > 0) {
      if ("tag" in student === false) {
        student.tag = [input];
      } else {
        student.tag.push(input);
      }
      updateTag(student);
    }
    setInput("");
  };

  return (
    <div>
      <Card>
        <Image>
          <Img src={student.pic}></Img>
        </Image>
        {/* main card */}
        <div style={{ width: "80%" }}>
          <h1>
            <strong>
              {student.firstName} {student.lastName}{" "}
            </strong>
          </h1>
          <p>Email: {student.email}</p>
          <p>Company: {student.company}</p>
          <p>Skill: {student.skill}</p>
          <p>Average: {average()}</p>
          {/* showing tags */}
          <div id="tags">
            {student.tag
              ? student.tag.map((tag) => (
                  <Chip
                    style={{ fontFamily: "railsway" }}
                    key={uniqid()}
                    label={tag}
                    variant="outlined"
                  />
                ))
              : ""}
          </div>
          {/* adding tags */}
          <TextField
            size="small"
            style={{ marginTop: "10px", marginBottom: "15px" }}
            inputProps={{
              style: {
                height: "10px",
                fontFamily: "railsway",
              },
            }}
            onChange={handleUpdate}
            placeholder="Add a tag"
            value={input}
          />

          <IconButton onClick={() => submitInput(student)}>
            <AddCircleIcon />
          </IconButton>
        </div>
        {/* expand control */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleExpand} style={{ height: "30px" }}>
            {!expandSetting ? <AddIcon /> : <RemoveIcon />}
          </IconButton>
        </div>
      </Card>
      {/* expanded card */}
      <div className={!expandSetting ? "expand" : ""}>
        {student.grades.map((grade, i) => (
          <p key={uniqid()} id="tests">
            Test {i + 1}: {grade}%
          </p>
        ))}
      </div>
      <div id="line"></div>
    </div>
  );
};

export default DataDisplay;
