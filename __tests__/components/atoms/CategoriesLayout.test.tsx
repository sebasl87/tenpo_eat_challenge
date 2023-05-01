import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import CategoriesLayout from "../../../src/components/atoms/CategoriesLayout";


describe("CategoriesLayout component", () => {
    it("should render successfully with CategoriesLayout", () => {
        const categoriesLayout = renderer
            .create(<CategoriesLayout children="AddressLayout_mock" />)
            .toJSON();

        expect(categoriesLayout).toMatchSnapshot();
    });
});
