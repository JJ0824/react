import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width:60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Menu = () => {
  return <Container>
    <Button />
    <Button />
    <Button />
    <Button />
  </Container>;
}

export default Menu;