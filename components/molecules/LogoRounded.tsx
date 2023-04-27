import React from 'react'
import styled from 'styled-components/native';

export interface ILogoRounded {
    image?: string;
    bgColor?: string;
}

const Container = styled.View<ILogoRounded>`
margin-top: 10px;
background-color: ${(props) => props.bgColor};
width: 104px;
height: 104px;
justify-content: center;
display: flex;
align-items: center;
border-radius: 16px;
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