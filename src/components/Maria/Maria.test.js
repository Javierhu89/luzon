import React from "react";
import { shallow } from "enzyme";
import Maria from "./Maria";

describe("Maria", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Maria />);
    expect(wrapper).toMatchSnapshot();
  });
});
