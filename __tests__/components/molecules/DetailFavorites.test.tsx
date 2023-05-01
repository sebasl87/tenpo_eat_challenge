import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import DetailFavorites from "../../../src/components/molecules/DetailFavorites";


describe("DetailFavorites component", () => {
    it("should render successfully with DetailFavorites", () => {
        const detailFavorites = renderer
            .create(<DetailFavorites favoriteFood="DetailFavorites_mock" rate="DetailFavorites_mock" restaurantName="DetailFavorites_mock" lapseTime="DetailFavorites_mock" />)
            .toJSON();

        expect(detailFavorites).toMatchSnapshot();
    });
});
