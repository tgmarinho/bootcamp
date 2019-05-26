import React from "react";
import { mount } from "enzyme";

import App from "./App";

it("should render Hello World", () => {
  const wrapper = mount(<App />);

  //expect(wrapper.find("h1").exists()).toBe(true);
  expect(wrapper.contains(<h1>Hello World</h1>)).toBe(true);
});
