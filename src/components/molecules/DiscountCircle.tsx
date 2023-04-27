import React from 'react'
import styled from 'styled-components/native';

export interface IDiscountCircle {
    discount?: string;
}

const Circle = styled.View`
width: 30px;
height: 30px;
background: #00BAA4;
justify-content: center;
align-items: center;
position: absolute;
margin-top: 2px;
margin-left: 78px;
z-index: 2;
`
const TextDiscount = styled.Text`
color: #fff;
font-size: 11px;
`
const Discount = styled.Text`
color: #fff;
font-size: 7px;
margin-top: -2px;
`

const DiscountCircle: React.FC<IDiscountCircle> = ({ discount }) => {
    return (
        <Circle style={{ borderRadius: 50 }}>
            <TextDiscount style={{ fontFamily: 'Roboto-Light', }}>{discount}%</TextDiscount>
            <Discount style={{ fontFamily: 'Roboto-Light', }}>DCTO</Discount>
        </Circle>
    )
}

export default DiscountCircle;