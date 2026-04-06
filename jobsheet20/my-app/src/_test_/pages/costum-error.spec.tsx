import { render, screen } from "@testing-library/react"
import Costum404 from "@/pages/404"

describe("Custom 404 Page", () => {
    it("renders custom 404 page correctly", () => {
        const page = render(<Costum404 />)
        expect(screen.getByTestId("title").textContent).toBe("Custom 404 Page")
        expect(page).toMatchSnapshot()
    })
})