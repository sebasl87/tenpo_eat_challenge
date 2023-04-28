import React from 'react'
import styled from 'styled-components/native';

export interface IHeaderFavorites {
    imageLogo?: any;
    imageBg?: any;

}

const LayoutImage = styled.ImageBackground`
    width: 260px;
    height: 102px;
`
const LogoImage = styled.Image`
    width: 44px;
    height: 44px;    
    position: absolute;
    z-index: 1;
    margin-left: 11px;
    margin-top: 9px;

`

const Container = styled.View`
    width: 260px;
    height: 102px;
    display: flex;            
`

const HeaderFavorites: React.FC<IHeaderFavorites> = ({ imageLogo, imageBg }) => {
    return (
        <Container>
            <LogoImage source={imageLogo} />
            <LayoutImage source={imageBg}>
            </LayoutImage>
        </Container>

    )
}

export default HeaderFavorites;