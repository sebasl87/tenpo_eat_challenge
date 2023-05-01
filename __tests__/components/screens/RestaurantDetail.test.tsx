import React from "react"

import { render, waitFor } from "@testing-library/react-native"

import { RestaurantDetail } from "../../../src/components/screens"

import { check } from "react-native-permissions"

import Geolocation from "react-native-geolocation-service"

jest.mock("@react-navigation/native", () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
        goBack: jest.fn(),
    }),

    useRoute: () => ({
        params: {
            resto: {
                id: 1,
                uri: "https://i.imgur.com/1PLcyBL.png",
                uri_large: "https://i.imgur.com/25zvKsX.png",
                discount: "50",
                restaurantName: "Mcdonalds",
                rate: "3.5",
                lapseTime: "10-50",
                bgColor: ""
            }
        },
    }),
}));

describe("<RestaurantDetail />", () => {
    test("should renders MapView and Marker with user current location", async () => {
        render(<RestaurantDetail />)

        await waitFor(() => {
            expect(check).toHaveBeenCalledTimes(1)
            expect(Geolocation.getCurrentPosition).toHaveBeenCalledTimes(1)
        })
    })
})
