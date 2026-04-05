import { render, screen } from "@testing-library/react";
import Appsetting from "@/pages/settings/app";

describe("App Setting Page", () => {
  it("renders app setting title", () => {
    render(<Appsetting />);

    expect(screen.getByText("App Setting Page").textContent).toBe("App Setting Page");
  });
});
