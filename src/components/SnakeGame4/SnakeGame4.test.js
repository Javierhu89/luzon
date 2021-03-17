import React from "react";
import { shallow } from "enzyme";
import SnakeGame4 from "./SnakeGame4";

describe("SnakeGame4", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SnakeGame4 />);
    expect(wrapper).toMatchSnapshot();
  });
});
