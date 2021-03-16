import React from "react";
import { shallow } from "enzyme";
import Portal from "./Portal";

describe("Portal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Portal />);
    expect(wrapper).toMatchSnapshot();
  });
});
