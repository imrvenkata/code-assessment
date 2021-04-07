import React from "react";
import { shallow } from "enzyme";
import Game from "./Game";
describe("GameComponent", () => {
  it("should render game component", () => {
    const wrapper = shallow(<Game />);
  });
});
