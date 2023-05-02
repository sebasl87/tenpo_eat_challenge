import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { HeaderLocationSearch } from "../../../src/components/organisms";

const onPressMock = jest.fn();

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
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
        }),
}));

describe("HeaderLocationSearch component", () => {
    it("should render successfully with mock", () => {
        const headerLocationSearchSection = renderer
            .create(<HeaderLocationSearch title="Mock to test title" />)
            .toJSON();

        expect(headerLocationSearchSection).toMatchSnapshot();
    });

    // it("should click On Press", () => {
    //     render(
    //         <HeaderLocationSearch title="Mock to test title"/>
    //     );
    //     fireEvent.press(screen.getByTestId('clickMeLocation'));
    //     expect(onPressMock).toBeCalled;
    // });
});
