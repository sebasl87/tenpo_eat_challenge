import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { HeaderRestaurant } from "../../../src/components/organisms";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
        .mockReturnValueOnce({
            google: { geocode: [], loading: false }, address: { address: { formated_address: "Some mock street, Santiago, Chile" } }, restaurants: {
                restoList: [
                    {
                        id: 1,
                        uri: "https://i.imgur.com/1PLcyBL.png",
                        uri_large: "https://i.imgur.com/25zvKsX.png",
                        discount: "50",
                        restaurantName: "Mcdonalds",
                        rate: "3.5",
                        lapseTime: "10-50",
                        bgColor: ""
                    }
                ],
                loading: false
            }
        })
}));

describe("HeaderRestaurant component", () => {
    it("should render successfully with HeaderRestaurant_mock", () => {
        const headerRestaurantSection = renderer
            .create(<HeaderRestaurant />)
            .toJSON();

        expect(headerRestaurantSection).toMatchSnapshot();
    });
});
