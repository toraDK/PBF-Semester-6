import { render, screen } from "@testing-library/react";
import HalamanRegister from "@/pages/auth/register";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/auth/register",
      pathname: "/auth/register",
      query: {},
      asPath: "/auth/register",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("Register Page", () => {
  it("renders register form", () => {
    render(<HalamanRegister />);

    expect(screen.getByText("Halaman Register").textContent).toBe("Halaman Register");
    expect(screen.getByRole("button", { name: "Register" })).toBeTruthy();
  });
});
