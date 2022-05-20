import React, { useState, useEffect } from "react";
import search from "../api";
import DisplayData from "../components/dataDisplay";
import SearchIcon from "@mui/icons-material/Search";
import { Wrapper, Input, Line } from "./LayoutStyles";
import "../style.css";

const Layout = () => {
  const [students, setStudents] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const onChange = (x) => {
    const target = x.target.value;
    if (target) {
      const filter = students.filter((student) => {
        if (
          student.firstName.search(target) >= 0 ||
          student.lastName.search(target) >= 0
        ) {
          return student;
        }
      });
      setFilteredList(filter);
    } else {
      setFilteredList(students);
    }
  };
  useEffect(() => {
    search()
      .then((data) => {
        setStudents(data.students);
        return data;
      })
      .then((data) => {
        setFilteredList(data.students);
      });
  }, []);

  return (
    <div>
      <Wrapper>
        <Input onChange={onChange} />
        <SearchIcon id="searchIcon" />
        <Line style={{ border: "1px solid black" }} />{" "}
        {filteredList.map((student) => (
          <DisplayData student={student} />
        ))}
      </Wrapper>
    </div>
  );
};

export default Layout;
