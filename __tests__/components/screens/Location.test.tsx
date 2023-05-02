import React from "react"
import renderer from "react-test-renderer";

import { Location } from "../../../src/components/screens"

describe("<Location />", () => {

    it("should render successfully", () => {
        const restaurantSection = renderer
            .create(<Location />)
            .toJSON();

        expect(restaurantSection).toMatchSnapshot();
    });

    it("should render successfully with location", () => {
        jest.mock("react-redux", () => ({
            ...jest.requireActual("react-redux"),
            useDispatch: jest.fn(),
            useSelector: jest.fn()
                .mockReturnValueOnce({
                    address: {
                        address: { formated_address: "Some mock street, Santiago, Chile" },
                        geolocation: { lat: -70, lng: -34 }
                    }
                }),
        }));
        const restaurantSection = renderer
            .create(<Location />)
            .toJSON();

        expect(restaurantSection).toMatchSnapshot();
    });
})