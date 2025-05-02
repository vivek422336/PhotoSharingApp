import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import App from "../App";

describe("App Navigation Foundation", () => {
  test("App renders correctly", () => {
    expect(() => render(<App />)).not.toThrow();
  });

  test("Bottom tabs are visible", () => {
    const { getAllByText } = render(<App />);

    expect(getAllByText("Home")).toBeTruthy();
    expect(getAllByText("Upcoming")).toBeTruthy();
    expect(getAllByText("Completed")).toBeTruthy();
  });

  test("Home tab is active by default", () => {
    const { getByText, queryByText } = render(<App />);

    expect(getByText("Home Screen")).toBeTruthy();
    expect(queryByText("Upcoming Screen")).toBeNull();
    expect(queryByText("Completed Screen")).toBeNull();
  });

  test("Navigate to Upcoming tab", async () => {
    const { getAllByText, getByText, queryByText } = render(<App />);

    await act(async () => {
      fireEvent.press(getAllByText("Upcoming")[0]);
    });

    expect(getByText("Upcoming Screen")).toBeTruthy();
    expect(queryByText("Home Screen")).toBeNull();
  });

  test("Navigate to Completed tab", async () => {
    const { getAllByText, getByText, queryByText } = render(<App />);

    await act(async () => {
      fireEvent.press(getAllByText("Completed")[0]);
    });

    expect(getByText("Completed Screen")).toBeTruthy();
    expect(queryByText("Home Screen")).toBeNull();
  });

  test("Tab icons are present", () => {
    const { getAllByTestId } = render(<App />);

    const tabIcons = getAllByTestId("tab-icon");
    expect(tabIcons.length).toBeGreaterThan(0);
  });
});
