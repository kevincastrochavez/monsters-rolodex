import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
  ];

  expect(shallow(<CardList monsters={mockRobots} />)).toMatchSnapshot();
});
