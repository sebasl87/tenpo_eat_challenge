import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { RestaurantRow } from "../../../src/components/organisms";
import { render, screen, fireEvent } from '@testing-library/react-native';

export const mock_restoList = [{
    id: 1,
    uri: "https://i.imgur.com/1PLcyBL.png",
    uri_large: "https://i.imgur.com/25zvKsX.png",
    discount: "50",
    restaurantName: "Mcdonalds",
    rate: "3.5",
    lapseTime: "10-50",
    bgColor: ""
}, {
    id: 2,
    uri: "https://i.imgur.com/PPaKrFj.png",
    uri_large: "https://i.imgur.com/Ui5IcDP.png",
    discount: "30",
    restaurantName: "MELT pizzas",
    rate: "4.5",
    lapseTime: "10-60",
    bgColor: ""
}]
const onPressMock = jest.fn();

describe("RestaurantRow component", () => {
    it("should render successfully with RestaurantRow_mock", () => {
        const restaurantRowSection = renderer
            .create(<RestaurantRow restoList={mock_restoList} />)
            .toJSON();

        expect(restaurantRowSection).toMatchSnapshot();
    });

    it("should click On Press", () => {
        render(<RestaurantRow restoList={mock_restoList} />);
        const optRest = screen.getAllByTestId('clickMeRestaurantRow');
        fireEvent.press(optRest[1]);
        expect(onPressMock).toBeCalled;
    });

});
