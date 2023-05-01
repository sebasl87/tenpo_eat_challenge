import React from "react"

import { render, waitFor } from "@testing-library/react-native"

import { RestaurantDetail } from "../../../src/components/screens"

describe("<UserScreen />", () => {
    test("should renders MapView and Marker with user current location", () => {
        render(<RestaurantDetail />)
    })
})