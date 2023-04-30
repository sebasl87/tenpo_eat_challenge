import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { Restaurant } from "../../../src/components/organisms";

export const mock_resto = {
    id: 1,
    uri: "https://i.imgur.com/1PLcyBL.png",
    uri_large: "https://i.imgur.com/25zvKsX.png",
    discount: "50",
    restaurantName: "Mcdonalds",
    rate: "3.5",
    lapseTime: "10-50",
    bgColor: ""
}

describe("Restaurant component", () => {
    it("should render successfully with Restaurant_mock", () => {
        const restaurantSection = renderer
            .create(<Restaurant resto={mock_resto} />)
            .toJSON();

        expect(restaurantSection).toMatchSnapshot();
    });
});
