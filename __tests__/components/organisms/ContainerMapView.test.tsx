import React from "react"
import { render, waitFor } from "@testing-library/react-native"
import ContainerMapView from "../../../src/components/organisms/ContainerMapView"
import { check } from "react-native-permissions"
import Geolocation from "react-native-geolocation-service"

describe("<ContainerMapView />", () => {
    test("should renders MapView and Marker with user current location", async () => {
        const { getByTestId } = render(<ContainerMapView lat={32} lng={50} />)

        await waitFor(() => {
            expect(check).toHaveBeenCalledTimes(1)
            expect(Geolocation.getCurrentPosition).toHaveBeenCalledTimes(1)
            expect(getByTestId("map")).toBeDefined()
        })
    })
})
