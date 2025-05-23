import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & i {
    font-size: 2.5rem;
    margin-bottom: 3px
  }
  & span {
    font-size: 1.1rem;
    font-weight:600;
  }
`
function NavItem({icon, name}) {
  return (
    <div>
      <Container>
        <i className={icon}></i>
        <span>{name}</span>
      </Container>
    </div>
  );
}

export default NavItem;