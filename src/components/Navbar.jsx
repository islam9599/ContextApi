import React from "react";
import { Container, Item } from "./style";

const Navbar = ({ data }) => {
  return (
    <Container>
      <Item>Logo</Item>
      <Item>Logo</Item>
      <Item>Logo</Item>
      <Item>
        All Movies <span>{data?.length || 0}</span>{" "}
      </Item>
    </Container>
  );
};

export default Navbar;
