import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { HeaderLocation } from "../../../src/components/organisms";

jest.mock("@react-navigation/native", () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
        goBack: jest.fn(),
    }),

    useRoute: () => ({
        name: "LocationSearch",
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



describe("HeaderLocation component", () => {
    it("should render successfully with mock", () => {
        jest.mock("react-redux", () => ({
            ...jest.requireActual("react-redux"),
            useSelector: jest.fn()
                .mockReturnValueOnce({
                    google: { geocode: [], loading: false }, address: { address: { formated_address: "Some mock street, Santiago, Chile", length: 0 } }, restaurants: {

                        loading: false
                    }
                }
                )
        }));
        const headerLocation = renderer
            .create(<HeaderLocation title="casa" />)
            .toJSON();

        expect(headerLocation).toMatchSnapshot();
    });

    it("should render successfully with mock && length", () => {
        jest.mock("react-redux", () => ({
            ...jest.requireActual("react-redux"),
            useSelector: jest.fn()
                .mockReturnValueOnce({
                    google: { geocode: [], loading: false }, address: { address: { formated_address: "Some mock street, Santiago, Chile", length: 3 } }, restaurants: {

                        loading: false
                    }
                }
                )
        }));
        const headerLocation = renderer
            .create(<HeaderLocation title="casa" />)
            .toJSON();

        expect(headerLocation).toMatchSnapshot();
    });
});