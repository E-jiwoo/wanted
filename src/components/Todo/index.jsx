import React, { useState } from "react";
import * as S from "./style";

const Index = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    setName(text);
    console.log(name);
  };

  return (
    <>
      <S.Background />
      <S.InputBox
        type="text"
        name="username"
        placeholder="input"
        onChange={onChange}
      />
      <S.AddBtn onClick={onClick}>Add</S.AddBtn>
      <S.List>{name}</S.List>
    </>
  );
};

export default Index;
