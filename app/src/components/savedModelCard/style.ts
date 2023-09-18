import styled from 'styled-components/native';
import { scaleFont, scaleSize } from '../../util/mixins';

export const Container = styled.View`
background-color: #EEEEEF;
height: ${scaleSize(60)}px;
display: flex;
flex-direction: row;
align-items: center;
padding: 0 ${scaleSize(10)}px;
border-radius: ${scaleSize(5)}px;
gap: ${scaleSize(10)}px;

position: relative;
margin: ${scaleSize(5)}px;

`

export const LeftContainer = styled.View`
background-color: #D5D5D6;
width: ${scaleSize(45)}px;
height: ${scaleSize(45)}px;

display: flex;
align-items: center;
justify-content: center;
border-radius: ${scaleSize(38)}px;

`

export const ModelName = styled.Text`
font-size: ${scaleFont(14)}px;
font-style: normal;
font-weight: 400;
letter-spacing: 0.1px;

`

export const ModelClasses = styled.Text`
font-size: ${scaleFont(12)}px;
font-style: normal;
font-weight: 500;
color: #257CB5;
`

export const RightContainer = styled.View`

`

export const RightArrow = styled.View`
position: absolute;
right: ${scaleSize(10)}px;
top: 30%;
`