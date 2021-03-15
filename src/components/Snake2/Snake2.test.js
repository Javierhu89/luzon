import React from "react";
import { shallow } from "enzyme";
import Snake2 from "./Snake2";

describe("Snake2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Snake2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
