import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import DiscountCircle from "../../../src/components/molecules/DiscountCircle";


describe("DiscountCircle component", () => {
    it("should render successfully with DiscountCircle", () => {
        const discountCircle = renderer
            .create(<DiscountCircle discount="DiscountCircle_mock" />)
            .toJSON();

        expect(discountCircle).toMatchSnapshot();
    });
});
