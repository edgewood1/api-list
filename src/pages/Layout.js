import React, { useState, useEffect } from "react";
import search from "../api";
import DisplayData from "../components/dataDisplay";
import Grid from "@mui/material/Grid";
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
const Layout = () => {
  const [students, useStudents] = useState([]);
  useEffect(() => {
    search().then((data) => {
      useStudents(data.students);
    });
  }, []);

  return (
    <Wrapper>
      {students.map((student) => (
        <DisplayData student={student} />
      ))}
    </Wrapper>
  );
};

export default Layout;
