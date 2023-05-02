import React from "react"
import renderer from "react-test-renderer";

import { HomeScreen } from "../../../src/components/screens"

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(() => ({
        restaurants: {
            restoList: [
                {
                    id: 1,
                    uri: 'https://i.imgur.com/1PLcyBL.png',
                    uri_large: 'https://i.imgur.com/25zvKsX.png',
                    discount: '50',
                    restaurantName: 'Mcdonalds',
                    rate: '3.5',
                    lapseTime: '10-50',
                    bgColor: '',
                },
            ],
        },
    })),
    useDispatch: () => mockDispatch,
}));
describe("<HomeScreen />", () => {

    it("should render successfully with Restaurant_mock", () => {
        const restaurantSection = renderer
            .create(<HomeScreen />)
            .toJSON();

        expect(restaurantSection).toMatchSnapshot();
    });
})