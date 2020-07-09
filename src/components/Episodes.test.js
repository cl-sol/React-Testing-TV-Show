import React from "react";
import Episodes from "./Episodes";
import { render } from "@testing-library/react";

test("re-renders correctly with selected season", () => {
    const {queryAllByText, rerender, getByText} = render(<Episodes episodes={[]} />)
    const initialEpisodes = queryAllByText(/season/i);
    expect(initialEpisodes).toHaveLength(0);

    rerender(<Episodes error="" episodes={mockData} />)
    const episodes = getByText(/name/i)
    expect(episodes).toBeTruthy();
});

//mock data
const mockData = [{
        id: "1",
        image: { medium: "medium_image"},
        name: "name",
        season: "3",
        number: "2",
        summary: "<p>summary</p>",
        runtime: 20
    }]