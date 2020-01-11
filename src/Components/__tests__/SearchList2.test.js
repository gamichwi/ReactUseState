import React from "react";
import { shallow } from "enzyme";
import axios from "axios";

import SearchList2 from "../SearchList/SearchList2";

const mockData = [
  { objectId: "1", title: "Search Result 1" },
  { objectId: "2", title: "Search Result 2" },
  { objectId: "3", title: "Search Result 3" }
];

describe("SearchList", () => {
  it("intial render", () => {
    const wrapperComponent = shallow(<SearchList2 />);
    const list = wrapperComponent.find("li").length;
    expect(list).toBe(0);
  });

  it("fetches async data", () => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            data: {
              hits: mockData
            }
          });
        }, 0);
      });
      axios.get = jest.fn(() => promise);
      const wrapperComponent = shallow(<SearchList2 />);
      const list = wrapperComponent.find("li").length;
      expect(list).toEqual(0);
      promise.then(() => {
        wrapperComponent.update();
        expect(wrapperComponent.find("li").length).toEqual(3);
      });
    });
});
