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
const Img = styled.img`
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
  const IMG_PATH = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getMovies();
  }, []);

  // 1. await는 반드시 async 함수 안에 사용한다.
  // 2. try-catch 구문을 이용하는 것이 좋다.
  async function getMovies() {
    try {
      const response = await getMoviesNowPlaying(); // 200
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    }catch (error) { // 400, 404, 500 기타 등등
      console.log(error)
    }
  }

  function getMoviesNowPlaying() {
    return axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjI4N2EzOWQ3MzA5ZTljZjJjZWYwZmVjMTdiNzFlMSIsIm5iZiI6MTc0MjE4MzMxMy40NDMsInN1YiI6IjY3ZDc5YjkxNWFkZGYyMDk1NWYxNTc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wwYyS_qHSuFvbKGBYTk6Cx2vw67eGMcgr3v3sitxlfk",
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
        {loading ? ( 
          <p>로딩 중...</p> 
        )
        : (
          data.results.map((movie) => 
            {
              return <Card key={movie.id}>
                <Img src={IMG_PATH+movie.poster_path}></Img>
                <Text>타이틀 : {movie.title}</Text>
                <Text>장르 : {movie.genre_ids}</Text>
                <hr />
                <Text>{movie.overview}</Text>
              </Card>;
            }) // 중괄호를 쓸거면 return이 필요하고 return 없이 쓰고싶다면 소괄호를 써야함.
            // (<Card key={movie.id}>
            //   <Img src=" "></Img>
            //   <Text>타이틀 : {movie.title}</Text>
            //   <Text>장르 : {movie.genre_ids}</Text>
            //   <hr />
            //   <Text>{movie.overview}</Text>
            // </Card>))
        )}
      </Container>
    </div>
  );
}

export default MovieList;