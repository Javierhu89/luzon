import React from "react";
import { shallow } from "enzyme";
import SnakeGame2 from "./SnakeGame2";

describe("SnakeGame2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SnakeGame2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
