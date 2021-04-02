import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

const mockRobot = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
  },
];

it("expect to render card component", () => {
  expect(shallow(<Card monster={mockRobot} />).length).toEqual(1);
});

it("expect to render card component", () => {
  expect(shallow(<Card monster={mockRobot} />)).toMatchSnapshot();
});
