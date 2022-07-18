import React from "react";
import { createGlobalStyle } from 'styled-components';
import TodoCreate from "./conponents/TodoCreate";
import TodoHead from "./conponents/TodoHead";
import TodoList from "./conponents/TodoList";
import TodoTemplate from "./conponents/TodoTemplate";
import { TodoProvider } from "./conponents/TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate> 
    </TodoProvider>
  );
}

export default App;
