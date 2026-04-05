import { render, screen } from "@testing-library/react";
import Usersetting from "@/pages/user";

describe("User Setting Page", () => {
  it("renders user setting title", () => {
    render(<Usersetting />);

    expect(screen.getByText("User Setting Page").textContent).toBe("User Setting Page");
  });
});
