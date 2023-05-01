import React from "react"

import { render, waitFor } from "@testing-library/react-native"

import { RestaurantDetail } from "../../../src/components/screens"

jest.mock('dotenv', () =>
    require('dotenv/config')
);

jest.mock('react-native-maps', () => {
    const React = require('react');
    const { View } = require('react-native');
    class MockMapView extends React.Component {
        render() {
            const { testID, children, ...props } = this.props;

            return (
                <View
                    {...{
                        ...props,
                        testID,
                    }}>
                    {children}
                </View>
            );
        }
    }

    const mockMapTypes = {
        STANDARD: 0,
        SATELLITE: 1,
        HYBRID: 2,
        TERRAIN: 3,
        NONE: 4,
        MUTEDSTANDARD: 5,
    };

    return {
        __esModule: true,
        default: MockMapView,
        MAP_TYPES: mockMapTypes,
        PROVIDER_DEFAULT: 'default',
        PROVIDER_GOOGLE: 'google',
    };
});

jest.mock('react-native-permissions', () =>
    require('react-native-permissions/mock')
);

jest.mock('react-native-google-places-autocomplete', () => { });

describe("<UserScreen />", () => {
    test("should renders MapView and Marker with user current location", () => {
        render(<RestaurantDetail />)
    })
})