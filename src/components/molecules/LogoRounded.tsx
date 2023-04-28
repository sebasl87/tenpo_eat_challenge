import React from 'react'
import styled from 'styled-components/native';

export interface ILogoRounded {
    image?: any;
    bgColor?: string;
}

const Container = styled.View<ILogoRounded>`
    align-items: center;
    background-color: ${(props) => props.bgColor};
    border-radius: 16px;
    display: flex;
    height: 104px;
    justify-content: center;
    margin-top: 10px;
    width: 104px;
`

const Images = styled.Image`
    max-width: 104px;
`

const LogoRounded: React.FC<ILogoRounded> = ({ image, bgColor }) => {
    return (
        <Container bgColor={bgColor}>
            <Images
                source={image}
            />
        </Container>
    )
}

export default LogoRounded;