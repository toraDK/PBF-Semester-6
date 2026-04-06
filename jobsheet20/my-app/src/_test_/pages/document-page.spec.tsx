import { renderToStaticMarkup } from "react-dom/server";
import Document from "@/pages/_document";

jest.mock("next/document", () => ({
  __esModule: true,
  Html: ({ children, lang }: any) => (
    <html data-testid="html" lang={lang}>
      {children}
    </html>
  ),
  Head: ({ children }: any) => <head>{children}</head>,
  Main: () => <main data-testid="main" />,
  NextScript: () => <script data-testid="next-script" />,
}));

describe("Document Page", () => {
  it("renders document structure", () => {
    const markup = renderToStaticMarkup(<Document />);
    expect(markup).toContain("lang=\"id\"");
    expect(markup).toContain("<body>");
  });
});
