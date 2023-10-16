import styled from 'styled-components/native';
import { scaleFont, scaleSize } from '../../../util/mixins';


export const Container = styled.View`
padding-top: ${scaleFont(20)}px;
padding-bottom: ${scaleSize(100)}px;
position: relative;
`

export const Header = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 50%;
`

export const HeaderTitle = styled.Text`
margin-left: 50%;
font-size: ${scaleFont(17)}px;
font-weight: 700;
`

export const MainBody = styled.View`

`

// Form components
export const FormContainer = styled.View`
background-color: #EEEEEF;
padding: ${scaleSize(10)}px;
`

export const FormLabel = styled.Text`
font-weight: 400;
`

export const FormNoteContainer = styled.View`
background-color: #D3F0EB;
padding: ${scaleSize(10)}px;
border-radius: ${scaleSize(10)}px;
margin-top: ${scaleSize(10)}px;
margin-bottom: ${scaleSize(20)}px;

`

export const FormNoteMessage = styled.Text`
color: #5C9288;
font-family: Apercu;
font-size: ${scaleFont(12)}px;
font-style: normal;
font-weight: 500;
`

export const InputGroup = styled.View`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
gap: ${scaleFont(5)}px;

`