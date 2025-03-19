import React from "react";
import styled from "styled-components";

const SearchBox = styled.div`
  width: 100%;
`;
const Input = styled.input`
  width: 500px;
`;
const Button = styled.button`
  width: 130px;
  height: 40px;
`;
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap : 10px;
`

function Search() {
  return (
    <div>
      <SearchBox>
        <Input />
        <Button>검색</Button>
      </SearchBox>
      <h3>{keyword ? `${keyword}로 검색한 결과 리스트` : null}</h3>
      <Container>
        <Card></Card>
      </Container>
    </div>
  );
}

export default Search;