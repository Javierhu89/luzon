import React from "react";
import { shallow } from "enzyme";
import SnakeGame3 from "./SnakeGame3";

describe("SnakeGame3", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SnakeGame3 />);
    expect(wrapper).toMatchSnapshot();
  });
});
