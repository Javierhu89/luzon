import React from "react";
import { shallow } from "enzyme";
import ModalMala from "./ModalMala";

describe("ModalMala", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ModalMala />);
    expect(wrapper).toMatchSnapshot();
  });
});
