import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import LogoRestaurantAndDetail from "../../../src/components/molecules/LogoRestaurantAndDetail";

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: mockedNavigate,
        }),
    };
});


describe("LogoRestaurantAndDetail component", () => {
    it("should render successfully with LogoRestaurantAndDetail", () => {
        const titleSection = renderer
            .create(<LogoRestaurantAndDetail textNameRestaurant="LogoRestaurantAndDetail_mock" bgColor="#000" />)
            .toJSON();

        expect(titleSection).toMatchSnapshot();
    });
});
