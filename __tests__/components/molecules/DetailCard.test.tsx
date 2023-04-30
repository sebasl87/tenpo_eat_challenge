import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import DetailCard from "../../../src/components/molecules/DetailCard";


describe("DetailCard component", () => {
    it("should render successfully with DetailCard", () => {
        const titleSection = renderer
            .create(<DetailCard rate="DetailCard_mock" lapseTime="DetailCard_mock" />)
            .toJSON();

        expect(titleSection).toMatchSnapshot();
    });
});
