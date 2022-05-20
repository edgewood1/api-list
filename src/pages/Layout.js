import React, { useState, useEffect } from "react";
import search from "../api";
import DisplayData from "../components/dataDisplay";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 80vw;
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;

const Input = styled.input`
  :focus {
    outline: none;
  }
  width: 90%;
  border: 1px solid white;
  height: 50px;
  font-size: 2em;
  // border-bottom: 1px solid black
`;

const Line = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: #ffff00;
  height: 1px;
`;

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
        {/* <TextField style={{ background: 'white', fontFamily: 'Raleway, sans-serif'}} onChange={onChange} id="filled-basic" label="Filter" variant="filled" /> */}
        <Input
          style={{ fontFamily: "Raleway, sans-serif" }}
          onChange={onChange}
        />
        <Line style={{ border: "1px solid black" }} />{" "}
        {filteredList.map((student) => (
          <DisplayData student={student} />
        ))}
      </Wrapper>
    </div>
  );
};

export default Layout;
