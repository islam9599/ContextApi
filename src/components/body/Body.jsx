import React, { useEffect, useState } from "react";
import { Card, Container, Img, Title } from "./style";

const Body = ({ getData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(() => setLoading(false));
  }, []);
  useEffect(() => {
    getData(data);
  }, [data, getData]);

  return (
    <Container>
      {loading && <Title>Loading...</Title>}
      {data.map(({ id, url, title }) => {
        return (
          <Card key={id}>
            <Img src={url} />
            <Title>{title}</Title>
          </Card>
        );
      })}
    </Container>
  );
};

export default Body;
