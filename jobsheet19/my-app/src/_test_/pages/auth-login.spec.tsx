import { render, screen } from "@testing-library/react";
import HalamanLogin from "@/pages/auth/login";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/auth/login",
      pathname: "/auth/login",
      query: {},
      asPath: "/auth/login",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("Login Page", () => {
  it("renders login form", () => {
    render(<HalamanLogin />);

    expect(screen.getByText("Halaman Login").textContent).toBe("Halaman Login");
    expect(screen.getByRole("button", { name: "Login" })).toBeTruthy();
  });
});
