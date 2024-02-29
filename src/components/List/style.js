import styled from "styled-components";

export const List = styled.div`
  padding: 10px;
`;

export const Box = styled.div`
  display: inline-block;
  position: relative;
  left: 200px;
  bottom: 400px;
  height: 50px;
  border: 2px solid white;
  border-radius: 8px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  color: white;
`;

export const Icon = styled.img`
  position: relative;
  bottom: 4px;
  padding-right: 10px;
  cursor: pointer;

  &:hover {
    filter: invert(50%);
  }
`;
