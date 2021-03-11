import React from "react";
import { shallow } from "enzyme";
import Colabora from "./Colabora";

describe("Colabora", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Colabora />);
    expect(wrapper).toMatchSnapshot();
  });
});
