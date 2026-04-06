import { render, screen } from "@testing-library/react";
import HalamanToko from "@/pages/shop/[[...slug]]";

const mockUseRouter = jest.fn();

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: () => mockUseRouter(),
}));

describe("Shop Page", () => {
  it("renders shop and category from slug", () => {
    mockUseRouter.mockReturnValue({
      query: {
        slug: ["fashion", "pria"],
      },
    });

    render(<HalamanToko />);

    expect(screen.getByText("Toko: fashion-pria").textContent).toBe("Toko: fashion-pria");
    expect(screen.getByText("Kategori: fashion").textContent).toBe("Kategori: fashion");
  });

  it("renders default category when slug is missing", () => {
    mockUseRouter.mockReturnValue({
      query: {},
    });

    render(<HalamanToko />);

    expect(screen.getByText("Kategori: Semua Kategori").textContent).toBe(
      "Kategori: Semua Kategori"
    );
  });
});
