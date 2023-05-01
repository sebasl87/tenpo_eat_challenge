import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { FavoritesRow } from "../../../src/components/organisms";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
        .mockReturnValueOnce({

            linksData: [
                {
                    uri: require("../../../assets/imgs/mcBack.png"),
                    logo: require("../../../assets/imgs/mc.png"),
                    restaurantName: "Mcdonalds",
                    rate: "3.5",
                    favorite: "Combo hamburguesa Bigmac",
                    lapseTime: "10-50",
                    bgColor: "",
                    id: 1
                }],

        }

        )
}));

describe("FavoritesRow component", () => {
    it("should render successfully with mock", () => {
        const favoritesRow = renderer
            .create(<FavoritesRow />)
            .toJSON();

        expect(favoritesRow).toMatchSnapshot();
    });
});