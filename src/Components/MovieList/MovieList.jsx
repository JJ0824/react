import { categories, getGenreListMovie, getGenreName } from "./api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Tab = styled.div`
  display: flex;
  margin: 10px 0;
  gap:8px;
`;
export const Button = styled.button`
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
    background-color: #58d5ff;
  }
  &.selected {
    background-color: #1a64b9;
  }
`;
export const Container = styled.div`
  width : 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; // ==repeat(3, 1fr); 밑에 열까지 확실하다면 row까지 줘도 됨
  /* display: flex;
  flex-wrap: wrap; */
  gap: 10px;
`;
export const Card = styled.div`
  width: 100%;
  /* width: 32%; */
  border: 1px solid dodgerblue;
  cursor: pointer;
  padding:10px;
`;
export const Img = styled.img`
  width: 100%;
`;
export const Text = styled.div`
  color: #333;
  overflow-wrap: break-word;
  word-break: break-all;
`;

function MovieList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState(0);
  const [genreList, setGenreList] = useState([]);
  const IMG_PATH = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();

  useEffect(() => {
    getMovies(0);
  }, []);

  // 1. await는 반드시 async 함수 안에 사용한다.
  // 2. try-catch 구문을 이용하는 것이 좋다.
  async function getMovies(index) {
    try {
      // 장르리스트 요청
      if (genreList.length === 0) {
        const storedGenreList = JSON.parse(sessionStorage.getItem("GenreList")); // 200 OK
        if (storedGenreList && storedGenreList.length > 0) {
          // 세션스토리지에 값이 있으면 상태 업데이트
          console.log("세션스토리지에 값이 있음");
          setGenreList(storedGenreList);
        } else {
          // 세션스토리지에도 없으면 API 호출
          console.log("세션스토리지에도 없어서 API 호출");
          const response = await getGenreListMovie(); // 200 OK
          setGenreList(response.data.genres);
          sessionStorage.setItem(
            "GenreList",
            JSON.stringify(response.data.genres)
          );
        }
      }

      // 무비리스트 요청
      let response = await categories[index].func(); // 200 OK
      console.log(response.data);
      setSelectedCat(index);
      setData(response.data);
      setLoading(false);
    }catch (error) { // 400, 404, 500 기타 등등
      console.log(error);
      alert("네트워크 오류로 정상적인 동작이 안되고 있습니다.");
    }
  }

  
  return (
    <div>
      <h1>MovieList</h1>
      <Tab> 
      {/* 1. 선택하면 해당 카테고리 무비리스트 요청(함수요청) 2. 카테고리에 맞게 버튼 활성화 */}
        {
          categories.map((category, i)=> (
            <Button key={i} onClick={()=>getMovies(i)} className={i == selectedCat? "selected" : ""}>
              {category.category}
            </Button>
          ))
        }
      </Tab>
      <Container>
        {loading ? ( 
          <p>로딩 중...</p> 
        )
        : (
          data.results.map((movie) => 
            { // 중괄호를 쓸거면 return이 필요하고
              return <Card key={movie.id} onClick={()=> navigate(`${movie.id}`)}>
                <Img src={IMG_PATH+movie.poster_path}></Img>
                <Text>타이틀 : {movie.title}</Text>
                <Text>장르 : {getGenreName(genreList, movie.genre_ids)}</Text> 
                {/* ① 컴포넌트 처음 로드할 때(==useEffect() []), 장르 리스트 요청 
                    ② 장르 리스트 저장 
                    ③ 변환함수 작성 -> 함수(숫자) return 장르텍스트 */}
                <hr />
                <Text>{movie.overview}</Text>
              </Card>;
            }) 
            // return 없이 쓰고싶다면 소괄호를 써야함.
            // (
            // <Card key={movie.id}>
            //   <Img src=" "></Img>
            //   <Text>타이틀 : {movie.title}</Text>
            //   <Text>장르 : {movie.genre_ids}</Text>
            //   <hr />
            //   <Text>{movie.overview}</Text>
            // </Card>
            // ))
        )}
      </Container>
    </div>
  );
}

export default MovieList;