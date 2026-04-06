import { render, screen } from "@testing-library/react";
import Home from "@/pages";

describe("Home Page", () => {
  it("renders landing page content", () => {
    render(<Home />);

    expect(screen.getByText("Praktikum Next.js Pages Router").textContent).toBe(
      "Praktikum Next.js Pages Router"
    );
  });
});
