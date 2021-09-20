import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import Graphs from "../components/Graphs";
import App from "../components/App";

test("displays graphs correctly", async () => {
  const graph = render(<Graphs />);

  const dataGraph = await graph.findByTestId("graph");
  expect(dataGraph.find(<Graphs />).exists()).toBeFalsy();
});
