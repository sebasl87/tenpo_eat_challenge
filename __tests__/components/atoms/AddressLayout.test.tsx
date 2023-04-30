import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import AddressLayout from "../../../src/components/atoms/AddressLayout";


describe("AddressLayout component", () => {
    it("should render successfully with AddressLayout", () => {
        const titleSection = renderer
            .create(<AddressLayout children="AddressLayout_mock" />)
            .toJSON();

        expect(titleSection).toMatchSnapshot();
    });
});
