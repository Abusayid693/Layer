import styled from 'styled-components/native';
import { scaleFont, scaleSize } from '../../util/mixins';

export const Container = styled.View`
width: ${scaleSize(261)}px;
height: ${scaleSize(261)}px;
border-radius: 16px;
background-color: #4923E0;
padding: ${scaleSize(10)}px;

display: flex;
flex-direction: column;
justify-content: space-between;
margin: 0 ${scaleSize(2)}px;
`

export const Header = styled.View`
`

export const Title = styled.Text`

color: #FFF;
font-size: ${scaleFont(22)}px;
font-style: normal;
font-weight: 700;
line-height: 120%;
`

export const Subtitle = styled.Text`
color: rgba(255, 255, 255, 0.60);
font-family: Apercu;
font-size: ${scaleFont(22)}px;
font-style: normal;
font-weight: 700;
line-height: 120%;
`

export const Footer = styled.View`

`

export const ClassesText = styled.Text`
color: #FFF;
font-family: Apercu;
font-size: ${scaleFont(17)}px;;
font-style: normal;
font-weight: 400;
line-height: 120%;
`