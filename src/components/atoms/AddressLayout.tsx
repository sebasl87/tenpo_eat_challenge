import React from 'react'
import styled from 'styled-components/native';

export interface IRestaurantsLayout {
    children: React.ReactNode;
}
const Layout = styled.View`    
    background: #D4F9F5;
    padding: 20px 0px 18px 0px;
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
    align-items: center;
`
const AddressLayout: React.FC<IRestaurantsLayout> = ({ children }) => {
    return (
        <Layout>
            {children}
        </Layout>
    );
}

export default AddressLayout;