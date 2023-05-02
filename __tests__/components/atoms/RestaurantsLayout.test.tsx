import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import RestaurantsLayout from "../../../src/components/atoms/RestaurantsLayout";


describe("RestaurantsLayout component", () => {
    it("should render successfully with RestaurantsLayout", () => {
        const restaurantsLayout = renderer
            .create(<RestaurantsLayout children="RestaurantsLayout_mock" />)
            .toJSON();

        expect(restaurantsLayout).toMatchSnapshot();
    });
});
