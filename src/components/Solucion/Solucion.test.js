import React from "react";
import { shallow } from "enzyme";
import Solucion from "./Solucion";

describe("Solucion", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Solucion />);
    expect(wrapper).toMatchSnapshot();
  });
});
