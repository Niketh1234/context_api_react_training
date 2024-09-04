import React from "react";
import { HeaderWrapper, ListWrapper } from "./Header.styled";

const Header = () => (
  <HeaderWrapper>
    <h1>This is the App</h1>
    <ul style={{ listStyleType: "none" }}>
      <ListWrapper>Add Booking</ListWrapper>
      <ListWrapper>Show Bookings</ListWrapper>
    </ul>
  </HeaderWrapper>
);

export default Header;
