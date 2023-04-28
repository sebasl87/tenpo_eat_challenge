import React from 'react'

import styled from 'styled-components/native';

export interface ICategoriesLayout {
    children: React.ReactNode;
    image?: any;
}

const LayoutImage = styled.ImageBackground`
    width: 174px;
    height: 80px;    
`
const TextCategories = styled.Text`
    color: #fff;
    position: absolute;
    z-index: 2;
    margin-top: 30px;
    font-size: 16px;
    letter-spacing: 1px;
`

const Container = styled.View`
    width: 168px;
    height: 90px;
    display: flex;
    align-items: center;    
    align-content: center;

`

const CategoriesLayout: React.FC<ICategoriesLayout> = ({ children, image }) => {
    return (
        <Container >
            <TextCategories style={{ fontFamily: "Gotham-Bold" }}>{children}</TextCategories>
            <LayoutImage source={image}>
            </LayoutImage>
        </Container>

    );
}

export default CategoriesLayout;