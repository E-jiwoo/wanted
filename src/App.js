import Todo from "./components/Todo/index";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Todo />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: pretendard;
    line-height: normal;
    font-style: normal;
  }
  
`;

export default App;
