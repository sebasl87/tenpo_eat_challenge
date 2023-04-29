import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Title from "../../../src/components/atoms/Title";


describe("Title component", () => {
    it("should render successfully with title_mock", () => {
        const titleSection = renderer
            .create(<Title children="title_mock" />)
            .toJSON();

        expect(titleSection).toMatchSnapshot();
    });
});
