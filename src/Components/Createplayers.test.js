import React from "react";
import { shallow } from "enzyme";
import Createplayers from "./Game";
describe("CreatePlayersComponent", () => {
  it("should render CreatePlayers component", () => {
    const wrapper = shallow(<Createplayers />);
  });

});