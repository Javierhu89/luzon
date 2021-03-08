import React from "react";
import { shallow } from "enzyme";
import Header2 from "./Header2";

describe("Header2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Header2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
