import { render, screen } from "@testing-library/react";
import HalamanProdukStatic, { getStaticProps } from "@/pages/produk/static";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ priority, ...props }: any) => <img {...props} />,
}));

describe("Product Static Page", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn() as any;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("renders static product page", () => {
    const products = [
      { id: "1", name: "Mouse", image: "/mouse.jpg", category: "Aksesoris", price: 100000 },
    ];

    render(<HalamanProdukStatic products={products as any} />);

    expect(screen.getByText("Halaman Produk Static").textContent).toBe("Halaman Produk Static");
    expect(screen.getByText("Daftar Produk").textContent).toBe("Daftar Produk");
    expect(screen.getByText("Mouse").textContent).toBe("Mouse");
  });

  it("returns static props and revalidate value", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({ data: [{ id: "1", name: "Mouse" }] }),
    });

    const result = await getStaticProps();

    expect(result).toEqual({
      props: {
        products: [{ id: "1", name: "Mouse" }],
      },
      revalidate: 10,
    });
  });
});
