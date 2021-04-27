import React from "react";
import ReactDOM from "react-dom";
import ListItems from "./ListItems";

describe("List item componnet test", () => {
  it("renders 'no item' when the item list empty", () => {
    // buat element
    const container = document.createElement("div");
    // render component
    ReactDOM.render(<ListItems items={[]} />, container);
    // expect : no item
    expect(container.textContent).toMatch("No Items");
  });

  it("renders the items in a list", () => {
    const container = document.createElement("div");

    // render
    ReactDOM.render(
      <ListItems items={["orange", "apple", "pear"]} />,
      container
    );

    // query

    // expect
    expect(container.textContent).toMatch("orange");
    expect(container.textContent).toMatch("apple");
    expect(container.textContent).toMatch("pear");
  });
});
