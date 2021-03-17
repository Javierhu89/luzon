import React from "react";
import { shallow } from "enzyme";
import ModalBuena from "./ModalBuena";

describe("ModalBuena", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ModalBuena />);
    expect(wrapper).toMatchSnapshot();
  });
});
