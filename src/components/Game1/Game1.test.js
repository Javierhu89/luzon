import React from "react";
import { shallow } from "enzyme";
import Game1 from "./Game1";

describe("Game1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Game1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
