import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";
import renderer from "react-test-renderer";

describe("Footer", () => {
  it("shoul match snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Footer", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it("should render Footer", () => {
    render(<Footer />);
    expect(document.querySelector("footer")).toBeInTheDocument();
  });

  it("should render current year", () => {
    render(<Footer />);
    

    const currentYearElement = screen.getByLabelText("current year");
    expect(currentYearElement).toBeVisible();
    // expect(currentYearElement.textContent).toBe(new Date().getFullYear().toString())
    expect(currentYearElement.textContent).toBe(`${new Date().getFullYear()}`);
  });

  it("should render current year", () => {
    render(<Footer />);
    expect(document.querySelector("footer")).toHaveTextContent(
      new Date().getFullYear().toString()
    );
  });
});
