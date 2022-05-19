import styled from "@emotion/styled";

const Card = styled.div`
  display: flex;
  justify-content: start;
  width: 70vw;
  border-bottom: 1px solid gray;
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;
const Image = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;
const Img = styled.img`
  transform: scale(2);
  border: 1px solid black;
  border-radius: 55%;
  margin: 20px;

  @media only screen and (max-width: 600px) {
    transform: scale(1.1);
    margin: 10px;
  }
`;

const DataDisplay = ({ student }) => {
  const average = () => {
    const sum = student.grades.reduce((acc, num) => parseInt(num) + acc, 0);
    const avg = sum / student.grades.length;
    return avg;
  };
  return (
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
    </Card>
  );
};

export default DataDisplay;
