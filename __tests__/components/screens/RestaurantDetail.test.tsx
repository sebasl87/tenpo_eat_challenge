import React from "react"

import { RestaurantDetail } from "../../../src/components/screens"
import renderer from "react-test-renderer";

jest.mock("@react-navigation/native", () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
        goBack: jest.fn(),
    }),

    useRoute: () => ({
        params: {
            resto: {
                id: 1,
                uri: "https://i.imgur.com/1PLcyBL.png",
                uri_large: "https://i.imgur.com/25zvKsX.png",
                discount: "50",
                restaurantName: "Mcdonalds",
                rate: "3.5",
                lapseTime: "10-50",
                bgColor: ""
            }
        },
    }),
}));

describe("<RestaurantDetail />", () => {
    it("should render successfully", () => {
        const restaurantSection = renderer
            .create(<RestaurantDetail />)
            .toJSON();

        expect(restaurantSection).toMatchSnapshot();
    });

})
