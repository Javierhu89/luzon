import React from "react";
import { shallow } from "enzyme";
import Acomp from "./Acomp";

describe("Acomp", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Acomp />);
    expect(wrapper).toMatchSnapshot();
  });
});
