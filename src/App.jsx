import { createGlobalStyle } from "styled-components";
import Menu from "./Components/3_Props/Menu";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing:border-box;
    font-family: Poppins
  }
`

function App() {

  return (
    <div>
      <GlobalStyle />
      <Menu />
    </div>
  );
  
}

export default App
