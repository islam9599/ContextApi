import React, { useEffect, useState, useContext } from "react";
import { Card, Container, Img, Title } from "./style";
import { PhotoContext } from "../../store";

const Body = ({ getData }) => {
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useContext(PhotoContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPhoto(json))
      .then(() => setLoading(false));
  }, []);

  return (
    <Container>
      {loading && <Title>Loading...</Title>}
      {photo.map(({ id, url, title }) => {
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
