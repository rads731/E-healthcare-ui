import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/"
});
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
  it("Renders Home Page Component", () => {
    act(() => {
      ReactDOM.render(<App />, rootContainer);
    });
    const h1 = rootContainer.querySelector("h1");
    expect(h1.textContent).to.equal("E-healthcare Portal");
  });
});