import React from "react"

import { render, waitFor } from "@testing-library/react-native"

import { Location } from "../../../src/components/screens"

describe("<UserScreen />", () => {
    test("should renders MapView and Marker with user current location", () => {
        render(<Location />)
    })
})