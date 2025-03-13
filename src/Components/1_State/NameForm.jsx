import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width : 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.section`
  width: 400px;
  height: 400px;
  padding: 30px;
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 5px;
  & input {
    width: 300px;
    height : 30px;
  }
  & .name {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
`;

export function NameForm() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const [color, setColor] = useState("dodgerblue");
  const changeColor = () => {
    setColor("red");
  };

  return (
    <>
      <Container>
        <Box color={color}>
          <h2>이름 입력</h2>
          <input 
            type="text" 
            value={name}
            onChange={ (e) => {
              handleChange(e);
            }}
            placeholder="이름을 입력해주세요"
          />
          <p className="name">입력한 이름은 : {name}</p>
          <Button
            onClick={() => {
              changeColor();
            }}
          >click this! color change onclick!</Button>
        </Box>
      </Container>
    </>
  );
}