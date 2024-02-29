import React, { useState } from "react";
import * as S from "./style";
import List from "../List/index";

let nextId = 4;
const Index = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: true,
    },
    {
      id: 3,
      text: "할일 3",
      checked: true,
    },
  ]);

  const onClick = () => {
    if (text === "") {
      return alert("할일을 입력해주세요");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  return (
    <>
      <S.Background />
      <S.InputBox
        value={text}
        type="text"
        placeholder="input"
        onChange={(e) => setText(e.target.value)}
      />
      <S.AddBtn types="submit" onClick={onClick}>
        Add
      </S.AddBtn>
      <List todos={todos} />
    </>
  );
};

export default Index;
