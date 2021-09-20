/*eslint-disable*/
import { render, screen } from "@testing-library/react";
import ShallowRenderer from "react-test-renderer/shallow";
import Graphs from "../components/Graphs.js";
import App from "../components/App.js";

test("renders various graphs", async () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const res = renderer.getRenderOutput();

  expect(res.type).toBe("div");
  expect(res.props.children).toEqual(
    <main
      className="App-header"
      className="bg-secondary h-full overflow-hidden "
    >
      <Graphs data-testid="graph" />
    </main>
  );
});
