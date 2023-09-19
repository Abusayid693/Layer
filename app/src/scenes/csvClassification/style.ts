import styled from 'styled-components/native';
import { scaleFont, scaleSize } from '../../util/mixins';


export const Container = styled.View`
padding-top: ${scaleFont(20)}px;
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