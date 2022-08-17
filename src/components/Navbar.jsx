import React, { useContext, useState } from "react";
import { PhotoContext } from "../store";
import { Container, Item } from "./style";

const Navbar = () => {
  const [photo, setPhoto] = useContext(PhotoContext);
  return (
    <Container>
      <Item>Logo</Item>
      <Item>Logo</Item>
      <Item>Logo</Item>
      <Item>
        All Movies <span>{photo?.length || 0}</span>{" "}
      </Item>
    </Container>
  );
};

export default Navbar;
