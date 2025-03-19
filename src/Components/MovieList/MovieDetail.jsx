import React from "react";

function MovieDetail() {
  return (
    <div>
      <Container>
        <Header>
          <h1>타이틀</h1>

        </Header>
        <Img></Img>
        <Content>
          <p>타이틀</p>
          <p>장르</p>
          <p>개봉일</p>
          <p>상영시간</p>
          <p>감독</p>
          <p>배우</p>
          <p>영화설명</p>
        </Content>
      </Container>
    </div>
  );
}

export default MovieDetail;