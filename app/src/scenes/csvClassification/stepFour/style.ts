import styled from 'styled-components/native';
import { scaleFont, scaleSize } from '../../../util/mixins';


export const Container = styled.View`
background-color: #EEEEEF;
padding: ${scaleSize(10)}px;
position: relative;
width: 100%;
`

export const Header = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-right: ${scaleSize(20)}px;
`

export const FormLabel = styled.Text`
font-weight: 400;
font-size: ${scaleFont(18)}px;
opacity: 0.5;
`

export const AddButton = styled.Button`
background-color: red;
`

export const ListContainer = styled.View`
display: flex;
flex-direction: column;
gap: ${scaleSize(10)}px;
padding-top: ${scaleSize(20)}px;
`

export const Row = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`

export const RowText = styled.Text`
font-size: ${scaleFont(17)}px;

`

export const RowValue = styled.Text`
font-size: ${scaleFont(17)}px;
background: rgba(118, 118, 128, 0.12);
padding: ${scaleSize(6)}px ${scaleSize(7)}px;
border-radius: ${scaleSize(5)}px;
`