import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";

describe("AppComponent tests", () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it("should render AppComponent", () => {
    render(<App />);
  });
});

/**
 * const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
 */
