import { fireEvent, render, screen } from "@testing-library/react";
import Category from "@/pages/category/[[...slug]]";

const mockUseRouter = jest.fn();
const mockUseSWR = jest.fn();
const mockMutate = jest.fn();

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: () => mockUseRouter(),
}));

jest.mock("swr", () => ({
  __esModule: true,
  default: (...args: any[]) => mockUseSWR(...args),
}));

describe("Category Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders category list when slug is missing", () => {
    mockUseRouter.mockReturnValue({ query: {} });
    mockUseSWR.mockReturnValue({
      data: {
        data: [
          { id: "1", name: "Elektronik" },
          { id: "2", name: "Fashion" },
        ],
      },
      error: null,
      isLoading: false,
      mutate: mockMutate,
    });

    render(<Category />);

    expect(screen.getByText("Daftar Category").textContent).toBe("Daftar Category");
    expect(screen.getByText("Elektronik").textContent).toBe("Elektronik");
    expect(screen.getByText("Fashion").textContent).toBe("Fashion");
  });

  it("renders slug and refreshes data", () => {
    mockUseRouter.mockReturnValue({ query: { slug: ["food", "drink"] } });
    mockUseSWR.mockReturnValue({
      data: { data: [] },
      error: null,
      isLoading: false,
      mutate: mockMutate,
    });

    render(<Category />);

    expect(screen.getByText("food").textContent).toBe("food");
    expect(screen.getByText("drink").textContent).toBe("drink");

    fireEvent.click(screen.getByRole("button", { name: "Refresh data" }));
    expect(mockMutate).toHaveBeenCalledTimes(1);
  });
});
