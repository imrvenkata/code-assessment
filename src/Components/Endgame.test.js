import React from "react";
import { shallow } from "enzyme";
import Endgame from "./Endgame";
describe("EndGameComponent", () => {
  let endgame;
  beforeEach(() => {
    endgame = shallow(<Endgame />);
  });
  it("should render Navbar component", () => {
    const wrapper = shallow(<Endgame />);
  });
  it("EndGame button should have a label as replay", () => {
    expect(endgame.find("button").text()).toContain("Replay?");
  });
});
