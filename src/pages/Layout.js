import React, { useState, useEffect } from "react";
import search from "../api";

const Layout = () => {
  const [students, useStudents] = useState([]);
  useEffect(() => {
    search().then((data) => {
      useStudents(data.students);
    });
  }, []);

  return (
    <div>
      {students.map((item) => (
        <div>
          {item.firstName} {item.lastName}{" "}
        </div>
      ))}
    </div>
  );
};

export default Layout;
