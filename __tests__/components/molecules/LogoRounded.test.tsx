import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import LogoRounded from "../../../src/components/molecules/LogoRounded";


describe("LogoRounded component", () => {
    it("should render successfully with LogoRounded", () => {
        const logoRounded = renderer
            .create(<LogoRounded bgColor="#000" />)
            .toJSON();

        expect(logoRounded).toMatchSnapshot();
    });
});
