import { createGlobalStyle } from "styled-components";
import Menu from "./Components/3_Props/Menu";
import BasicRouter from "./Components/4_Router/BasicRouter";
import ReactRouter from "./Components/4_Router/ReactRouter";
import SendAPI from "./Components/2_Effect/SendAPI";
import MovieListMain from "./Components/MovieList/MovieListMain";
import ChatRoomMain from "./Components/ChatRoom/ChatRoomMain";
import Home from "./Components/4_Router/Home";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing:border-box;
    font-family: Poppins
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`

function App() {

  return (
    <div>
      <GlobalStyle />
      <MovieListMain />
    </div>
  );
  
}

export default App
