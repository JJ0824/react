import styled from "styled-components";

const Box = styled.div`
  width: 100px;
  height: 40px;
  background-color: dodgerblue;
  color: white;
  border-radius : 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #8282ee;
  }
`;

const Button = () => {
  return <Box></Box>;
};

export default Button;