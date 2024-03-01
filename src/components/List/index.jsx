import React from "react";
import * as S from "./style";
import check from "../../assets/check.svg";

const index = ({ todos, onRemove }) => {
  return (
    <>
      {todos.map((todo) => (
        <S.List key={todo.id}>
          <S.Box>
            <S.Text>
              <S.Icon src={check} onClick={() => onRemove(todo.id)} />
              {todo.text}
            </S.Text>
          </S.Box>
        </S.List>
      ))}
    </>
  );
};

export default index;
