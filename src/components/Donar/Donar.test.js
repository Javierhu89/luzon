import React from "react";
import { shallow } from "enzyme";
import Donar from "./Donar";

describe("Donar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Donar />);
    expect(wrapper).toMatchSnapshot();
  });
});
