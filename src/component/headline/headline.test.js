import React from "react";
import { shallow } from "enzyme";
import Headline from ".";

import { findByTestAttr, checkProps } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };

      wrapper = setUp(props);
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("should render a h1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("should render a desc", () => {
      const desc = findByTestAttr(wrapper, "description");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });

  describe("Check Prop Types", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "Test@email",
            age: 23,
            onlineStatus: false,
          },
        ],
      };

      const propsError = checkProps(Headline, expectedProps);
      expect(propsError).toBeUndefined;
    });
  });
});
