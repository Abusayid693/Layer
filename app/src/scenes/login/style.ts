import styled from 'styled-components/native';
import { scaleFont, scaleSize } from '../../util/mixins';

export const Container = styled.View`
display: flex;
width: 100%;
height: 100%;
padding: ${scaleSize(10)}px;
`


export const ContentContainer = styled.View`
padding: ${scaleSize(20)}px  ${scaleSize(0)}px;
display: flex;
flex-direction: column;
justify-content: space-between;


`

export const ContentText = styled.Text`
font-size: ${scaleFont(14)}px;
font-weight: 500;
color: #000;
margin-bottom: ${scaleSize(20)}px ;
`

export const MainContainer = styled.View`

`