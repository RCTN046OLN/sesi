import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component test", () => {
  it("counter should be increment when increment button clicked", () => {
    // render component
    const { getByText, debug, getByTestId } = render(<Counter />);
    // get button increment
    const incButton = getByText("Increment");
    // get counter
    const counter = getByTestId("counter");
    // click button increment
    fireEvent.click(incButton);
    // expect
    expect(counter).toHaveTextContent("1");
  });
});
