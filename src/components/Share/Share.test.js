import React from "react";
import { shallow } from "enzyme";
import Share from "./Share";

describe("Share", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Share />);
    expect(wrapper).toMatchSnapshot();
  });
});
