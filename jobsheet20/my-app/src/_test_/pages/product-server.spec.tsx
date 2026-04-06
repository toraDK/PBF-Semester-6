import { render, screen } from "@testing-library/react";
import HalamanProdukServer, { getServerSideProps } from "@/pages/produk/server";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ priority, ...props }: any) => <img {...props} />,
}));

describe("Product Server Page", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn() as any;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("renders server product page", () => {
    const products = [
      { id: "1", name: "Mouse", image: "/mouse.jpg", category: "Aksesoris", price: 100000 },
    ];

    render(<HalamanProdukServer products={products as any} />);

    expect(screen.getByText("Halaman Produk Server").textContent).toBe("Halaman Produk Server");
    expect(screen.getByText("Daftar Produk").textContent).toBe("Daftar Produk");
    expect(screen.getByText("Mouse").textContent).toBe("Mouse");
  });

  it("returns server side props", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({ data: [{ id: "1", name: "Mouse" }] }),
    });

    const result = await getServerSideProps();

    expect(result).toEqual({
      props: {
        products: [{ id: "1", name: "Mouse" }],
      },
    });
  });
});
