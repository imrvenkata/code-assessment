import React from "react";
import { shallow } from "enzyme";
import Board from "./Board";
describe("BoardComponent", () => {
  it("should render Board component", () => {
    const wrapper = shallow(<Board />);
  });
});
