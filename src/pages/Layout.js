import React, { useState, useEffect, useRef } from "react";
import DisplayData from "../components/dataDisplay";
import { Wrapper, Input, Line } from "./LayoutStyles";
import { read, update } from "../api/search";
import "../style.css";

const Layout = () => {
  const [students, setStudents] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [taggedList, setTaggedList] = useState([]);
  const [displayList, setDisplayList] = useState([]);

  const nameInput = useRef("");
  useEffect(() => {
    getAll();
  }, []);

  // adds all original students to list
  const getAll = () => {
    read()
      .then((data) => {
        setDisplayList(data);
        return data;
      })
      .then((data) => {
        setStudents(data);
      });
  };

  // search by name
  const nameSearch = () => {
    const target = nameInput.current.value;
    if (target) {
      const filter = students.filter((student) => {
        if (
          student.firstName.search(target) >= 0 ||
          student.lastName.search(target) >= 0
        ) {
          return student;
        }
      });
      setDisplayList(filter);
    } else {
      getAll();
    }
  };

  // search tags: display only certain tags
  const tagSearch = (e) => {
    const input = e.target.value;
    if (input) {
      const newFilter = displayList.filter((obj) => {
        if ("tag" in obj) {
          const tags = obj.tag.map((tag) => {
            return tag.includes(input);
          });
          return tags.includes(true);
        } else {
          return false;
        }
      });
      setDisplayList(newFilter);
    } else {
      nameSearch(nameInput.current.value);
    }
  };

  // add tag
  const updateTag = (student) => {
    console.log("stu", student);

    update(student.id, student).then((data) => {
      const newFilter = displayList.map((obj) => {
        return obj.id === data.id ? data : obj;
      });
      console.log();
      setDisplayList(newFilter);
    });
  };

  return (
    <div>
      <Wrapper>
        <Input
          ref={nameInput}
          placeholder="Search by name"
          onChange={nameSearch}
        />
        <Line style={{ border: "1px solid black" }} />{" "}
        <Input placeholder="Search by tag" onChange={tagSearch} />
        <Line style={{ border: "1px solid black" }} />{" "}
        {displayList.map((student) => (
          <DisplayData
            key={student.id}
            updateTag={updateTag}
            student={student}
          />
        ))}
      </Wrapper>
    </div>
  );
};

export default Layout;
