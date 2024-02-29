import React from "react";
import * as S from "./style";

const index = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <S.List key={todo.id}>
          <S.Box>
            <S.Text>{todo.text}</S.Text>
          </S.Box>
        </S.List>
      ))}
    </>
  );
};

export default index;
