import React from 'react'
import styled from 'styled-components/native';

export interface IRestaurantsLayout {
    children: React.ReactNode;
}
const Layout = styled.View`
    height: 100%;
    background: #fff;
    padding: 42px 0px 0px 16px;
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
`
const RestaurantsLayout: React.FC<IRestaurantsLayout> = ({ children }) => {
    return (
        <Layout>
            {children}
        </Layout>
    );
}

export default RestaurantsLayout;