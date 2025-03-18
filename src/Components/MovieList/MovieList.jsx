import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Tab = styled.div`
  display: flex;
  margin: 10px 0;
  gap:8px;
`;
const Button = styled.button`
  width: 130px;
  height: 40px;
  background-color: dodgerblue;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #6edbff;
  }
`;
const Container = styled.div`
  width : 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; // ==repeat(3, 1fr); 밑에 열까지 확실하다면 row까지 줘도 됨
  /* display: flex;
  flex-wrap: wrap; */
  gap: 10px;
`;
const Card = styled.div`
  width: 100%;
  /* width: 32%; */
  border: 1px solid dodgerblue;
  cursor: pointer;
  padding:10px;
`;
const Img = styled.div`
  width: 100%;
`;
const Text = styled.div`
  color: #333;
  overflow-wrap: break-word;
  word-break: break-all;
`;

function MovieList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMoviesNowPlaying.then((response)=>{
      console.log(response.data);
    });
  }, []);

  function getMoviesNowPlaying() {
    return axios.get("https://api.themoviedb.org/3/movie/now_playing", {
        headers: {
          accept: "application/json",
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY",
        },
      });
  }

  return (
    <div>
      <h1>MovieList</h1>
      <Tab>
        <Button>Now Playing</Button>
        <Button>Popular</Button>
        <Button>Top Rated</Button>
        <Button>Upcoming</Button>
      </Tab>
      <Container>
        <Card>
          <Img></Img>
          <Text>타이틀 : </Text>
          <Text>장르 : </Text>
          <hr />
          <Text></Text>
        </Card>
        <Card>
          <Img></Img>
          <Text>타이틀 : </Text>
          <Text>장르 : </Text>
          <hr />
          <Text></Text>
        </Card>
        <Card>
          <Img></Img>
          <Text>타이틀 : </Text>
          <Text>장르 : </Text>
          <hr />
          <Text></Text>
        </Card>
      </Container>
    </div>
  );
}

export default MovieList;