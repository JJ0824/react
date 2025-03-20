import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieCreditById, getMovieDetailById, IMG_PATH } from "./api.js"
import styled from "styled-components";
import noExist from "./img/no_exist.jpg";
import { IconBack } from "./Icons";

const Container = styled.div`
  width : 100%;
  display: flex;
  flex-direction:column;
`;
const Header = styled.div`
  width: 100%;
  color: dodgerblue;
  display: flex;
  justify-content: space-between;
`;
const Img = styled.img`
  width: 100%;
  margin : 20px 0;
`;
const Icon = styled.div`
  width: 35px;
  height: 35px;
  color : #fc3386;
  cursor: pointer;
`;
const Content = styled.div`
  font-size: 1rem;
  line-height: 30px;
  color: #333;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`

function MovieDetail() {
  const [data, setData] = useState(null);
  const [credit, setCredit] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(()=> {
    getMovieInfo();
  }, []);

  async function getMovieInfo() {
    try {
      let response = await getMovieDetailById(id);
      console.log(response.data);
      setData(response.data);
      response = await getMovieCreditById(id);
      console.log(response.data);
      setCredit(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("네트워크 오류로 정상적인 동작이 안되고 있습니다.");
    }
  }

  return (
    <div>
      <Container>
        {
          loading ? "로딩 중..." : <>
            <Header>
              <h1>{data.title}</h1>
              <Icon onClick={() => navigate(-1)}>
                <IconBack />
              </Icon>
            </Header>
            <Img src={data.poster_path ? IMG_PATH + data.poster_path : noExist}></Img>
            <Content>
              <p>타이틀 : {data.title}</p>
              <p>장르 : {" "} {data.genres.map((g) => g.name).filter((name) => name).join(", ")}</p>
              <p>개봉일 : {data.release_date}</p>
              <p>상영시간 : {data.runtime + "분"}</p>
              <p>감독 : {" "} {credit.crew.filter((c)=> c.job=="Director").map((c) => c.name).filter((name) => name).join(", ")}</p>
              <p>배우 : {" "} {credit.cast.slice(0, 10).map((c)=>c.name).filter((name)=>name).join(", ")}</p>
              <p>줄거리 : {data.overview}</p>
            </Content>
            <Bottom>
              <Icon onClick={() => navigate(-1)}>
                <IconBack />
              </Icon>
            </Bottom>
            <br/>
            <br/>
            <br/>
            <br/> 
          </>
        }
      </Container>
    </div>
  );
}

export default MovieDetail;