import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import LogoRestaurantAndDetail from "../../../src/components/molecules/LogoRestaurantAndDetail";
import { render, screen, fireEvent } from '@testing-library/react-native';

const mockedNavigate = jest.fn();
const onPressMock = jest.fn();

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
        const logoRestaurantAndDetail = renderer
            .create(<LogoRestaurantAndDetail textNameRestaurant="LogoRestaurantAndDetail_mock" bgColor="#000" />)
            .toJSON();

        expect(logoRestaurantAndDetail).toMatchSnapshot();
    });

    it("should click On Press", () => {
        render(
            <LogoRestaurantAndDetail textNameRestaurant="LogoRestaurantAndDetail" bgColor="#000" />
        );
        fireEvent.press(screen.getByTestId('clickMe'));
        expect(onPressMock).toBeCalled;
    });
});
