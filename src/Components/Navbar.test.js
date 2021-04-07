import { shallow } from "enzyme";
import React from "react";
import Navbar from "./Navbar";

describe("NavbarComponent tests", () => {
  let navbar;
  beforeEach(() => {
    navbar = shallow(<Navbar />);
  });

  it("should render Navbar component", () => {
    const wrapper = shallow(<Navbar />);
  });
  it("render a h1 element", () => {
    expect(navbar.find("h1").text()).toContain("GAP - TicTacToe");
  });
});
