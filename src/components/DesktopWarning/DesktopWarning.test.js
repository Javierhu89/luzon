import React from "react";
import { shallow } from "enzyme";
import DesktopWarning from "./DesktopWarning";

describe("DesktopWarning", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DesktopWarning />);
    expect(wrapper).toMatchSnapshot();
  });
});
