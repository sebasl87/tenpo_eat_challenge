import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from '@testing-library/react-native';

import { ContainerAddressData } from "../../../src/components/organisms";


describe("ContainerAddressData component", () => {
    it("should render successfully", () => {
        const containerAddressData = renderer
            .create(<ContainerAddressData handleOnChange={jest.fn()} preValue="123" />)
            .toJSON();
        expect(containerAddressData).toMatchSnapshot();
    });

});
