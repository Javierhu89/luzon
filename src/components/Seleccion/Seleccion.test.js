import React from "react";
import { shallow } from "enzyme";
import Seleccion from "./Seleccion";

describe("Seleccion", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Seleccion />);
    expect(wrapper).toMatchSnapshot();
  });
});
