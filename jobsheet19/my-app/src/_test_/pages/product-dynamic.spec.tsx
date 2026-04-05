import { render, screen } from "@testing-library/react";
import HalamanProduk, { getStaticPaths, getStaticProps } from "@/pages/produk/[product]";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("Dynamic Product Page", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn() as any;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("renders detail product view with product prop", () => {
    const product = {
      id: "1",
      name: "Mouse",
      price: 100000,
      image: "/mouse.jpg",
      category: "Aksesoris",
    };

    render(<HalamanProduk product={product as any} />);

    expect(screen.getByText("Detail Produk").textContent).toBe("Detail Produk");
    expect(screen.getByText("Mouse").textContent).toBe("Mouse");
  });

  it("returns static paths from API response", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({ data: [{ id: "1" }, { id: "2" }] }),
    });

    const result = await getStaticPaths();

    expect(result).toEqual({
      paths: [{ params: { product: "1" } }, { params: { product: "2" } }],
      fallback: false,
    });
  });

  it("returns static props for selected product", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({
        data: {
          id: "2",
          name: "Keyboard",
          price: 200000,
          image: "keyboard.jpg",
          category: "Aksesoris",
        },
      }),
    });

    const result = await getStaticProps({ params: { product: "2" } } as any);

    expect(result).toEqual({
      props: {
        product: {
          id: "2",
          name: "Keyboard",
          price: 200000,
          image: "keyboard.jpg",
          category: "Aksesoris",
        },
      },
    });
  });
});
