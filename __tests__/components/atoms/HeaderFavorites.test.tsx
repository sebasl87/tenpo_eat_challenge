import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import HeaderFavorites from "../../../src/components/atoms/HeaderFavorites";


describe("HeaderFavorites component", () => {
    it("should render successfully with HeaderFavorites", () => {
        const titleSection = renderer
            .create(<HeaderFavorites />)
            .toJSON();

        expect(titleSection).toMatchSnapshot();
    });
});
