import React from 'react'
import styled from 'styled-components/native';

export interface ITitle { children: React.ReactNode; }

const TitleStyled = styled.Text`
color: #333333;
font-size: 18px;
margin-bottom: 6px;
font-family: "Gotham-Bold";
`;
const Title: React.FC<ITitle> = ({ children }) => {
    return (
        <TitleStyled>{children}</TitleStyled>
    )
}

export default Title