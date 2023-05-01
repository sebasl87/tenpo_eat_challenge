import React from "react"

import { render, waitFor } from "@testing-library/react-native"

import { Location } from "../../../src/components/screens"
import Geolocation from "react-native-geolocation-service"
import { check } from "react-native-permissions"

describe("<Location />", () => {

    test("should renders MapView and Marker with user current location", async () => {
        const { getByTestId } = render(<Location />)
        await waitFor(() => {
            expect(check).toHaveBeenCalledTimes(1)
            expect(Geolocation.getCurrentPosition).toHaveBeenCalledTimes(1)
            expect(getByTestId("map")).toBeDefined()
        })
    })
})