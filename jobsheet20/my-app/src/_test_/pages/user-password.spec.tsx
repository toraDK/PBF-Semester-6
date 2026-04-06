import { render, screen } from "@testing-library/react";
import Passwordsetting from "@/pages/user/password";

describe("User Password Page", () => {
  it("renders password page title", () => {
    render(<Passwordsetting />);

    expect(screen.getByText("Pasword User Page").textContent).toBe("Pasword User Page");
  });
});
