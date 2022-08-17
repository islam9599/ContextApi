import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: white;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 300px;
  width: 200px;
  border: 1px solid black;
  border-radius: 5%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const Title = styled.div`
  padding: 5px;
  text-align: center;
`;
