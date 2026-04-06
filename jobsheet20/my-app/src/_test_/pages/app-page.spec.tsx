import { render, screen } from "@testing-library/react";
import App from "@/pages/_app";

jest.mock("next/dynamic", () => ({
  __esModule: true,
  default: () => {
    return function MockDynamicComponent() {
      return null;
    };
  },
}));

jest.mock(
  "next-auth/react",
  () => ({
    __esModule: true,
    SessionProvider: ({ children }: any) => <div data-testid="session-provider">{children}</div>,
    useSession: () => ({ data: null, status: "unauthenticated" }),
  }),
  { virtual: true }
);

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
      route: "/",
      query: {},
      asPath: "/",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("App Page", () => {
  it("renders component inside SessionProvider and AppShell", () => {
    const DummyPage = () => <div data-testid="dummy-page">Dummy Content</div>;

    render(<App Component={DummyPage as any} pageProps={{}} router={{} as any} />);

    expect(screen.getByTestId("session-provider")).toBeTruthy();
    expect(screen.getByTestId("dummy-page").textContent).toBe("Dummy Content");
  });
});
