import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { Header } from "../../../src/components/organisms";

jest.mock('Animated', () => {
    return {
        createTimer: jest.fn(),
        timing: jest.fn(() => {
            return {
                start: jest.fn(),
            };
        }),
        Value: jest.fn(() => {
            return {
                interpolate: jest.fn(),
            };
        }),
    };
});

describe("Header component", () => {

    it("should render successfully ", () => {

        const headerLocation = renderer
            .create(<Header />)
            .toJSON();

        expect(headerLocation).toMatchSnapshot();
    });
});