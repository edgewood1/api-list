import React, { useState } from "react";
import { Card, Image, Img } from "./dataDisplayStyles";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../style.css";

const DataDisplay = ({ student }) => {
  const [expandSetting, setExpand] = useState(false);
  const average = () => {
    const sum = student.grades.reduce((acc, num) => parseInt(num) + acc, 0);
    const avg = sum / student.grades.length;
    return avg;
  };

  const handleExpand = () => {
    setExpand(!expandSetting);
  };

  return (
    <div>
      <Card>
        <Image>
          <Img src={student.pic}></Img>
        </Image>
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
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleExpand} style={{ height: "30px" }}>
            {!expandSetting ? <AddIcon /> : <RemoveIcon />}
          </IconButton>
        </div>
      </Card>
      <div className={!expandSetting ? "expand" : ""}>
        {student.grades.map((grade, i) => (
          <p id="tests">
            Test {i + 1}: {grade}%
          </p>
        ))}
      </div>
      <div id="line"></div>
    </div>
  );
};

export default DataDisplay;
