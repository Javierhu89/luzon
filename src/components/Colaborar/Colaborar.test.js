import React from "react";
import { shallow } from "enzyme";
import Colaborar from "./Colaborar";

describe("Colaborar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Colaborar />);
    expect(wrapper).toMatchSnapshot();
  });
});
