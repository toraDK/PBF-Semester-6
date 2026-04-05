import { render, screen } from "@testing-library/react";
import HalamanAdmin from "@/pages/admin";

describe("Admin Page", () => {
  it("renders admin heading and description", () => {
    render(<HalamanAdmin />);

    expect(screen.getByText("Halaman Admin").textContent).toBe("Halaman Admin");
    expect(
      screen.getByText(/Selamat datang di halaman admin!/i).textContent
    ).toContain("Selamat datang di halaman admin!");
  });
});
