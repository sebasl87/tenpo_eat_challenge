import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { HomeLocation } from "../../../src/components/organisms";
import { IAddress } from "../../../src/store/addressSlice";

export const mock_address: IAddress = {
    formated_address: "Some mock street, Santiago, Chile",
    extra_data_address: "Mocked extra data",
    geolocation: { lat: -70, lng: -34 }
}

describe("HomeLocation component", () => {
    it("should render successfully with HomeLocation_mock", () => {
        const homeLocationSection = renderer
            .create(<HomeLocation address={mock_address} />)
            .toJSON();

        expect(homeLocationSection).toMatchSnapshot();
    });
});
