import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { CategoriesRow } from "../../../src/components/organisms";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
        .mockReturnValueOnce({
            linksData: [
                {
                    uri: require("../../../assets/imgs/hamburguer.png"),
                    category: "HAMBURGUESAS"
                }]
        })
}));

describe("CategoriesRow component", () => {
    it("should render successfully with mock", () => {
        const categoriesRow = renderer
            .create(<CategoriesRow />)
            .toJSON();
        expect(categoriesRow).toMatchSnapshot();
    });
});
