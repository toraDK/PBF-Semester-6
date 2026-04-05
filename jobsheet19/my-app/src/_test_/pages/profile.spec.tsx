import { render, screen } from "@testing-library/react";
import HalamanProfile from "@/pages/profile";

const mockUseSession = jest.fn();

jest.mock("next-auth/react", () => ({
  __esModule: true,
  useSession: () => mockUseSession(),
}));

describe("Profile Page", () => {
  it("renders profile data from session", () => {
    mockUseSession.mockReturnValue({
      data: {
        user: {
          fullname: "Tora",
        },
      },
    });

    render(<HalamanProfile />);

    expect(screen.getByText("Halaman Profile").textContent).toBe("Halaman Profile");
    expect(screen.getByText("Selamat Datang Tora").textContent).toBe("Selamat Datang Tora");
  });
});
