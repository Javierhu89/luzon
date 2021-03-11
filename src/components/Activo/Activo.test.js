import React from "react";
import { shallow } from "enzyme";
import Activo from "./Activo";

describe("Activo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Activo />);
    expect(wrapper).toMatchSnapshot();
  });
});
