import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { Header } from "../../../src/components/organisms";
import { waitFor } from "@testing-library/react-native";
jest.useFakeTimers()

jest.mock('react-native', () => {
    const rn = jest.requireActual('react-native')
    const spy = jest.spyOn(rn.Animated, 'timing')
    spy.mockImplementation(() => {
        return {
            start: jest.fn(),
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
        }
    });
    return rn
});
jest.useFakeTimers()

describe("Header component", () => {

    it("should render successfully ", async () => {

        const headerLocation = renderer
            .create(<Header />)
            .toJSON();
        await waitFor(() =>
            expect(headerLocation).toMatchSnapshot()
        )
    });
});