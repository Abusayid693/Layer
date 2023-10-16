import styled from 'styled-components/native';
import { scaleSize } from '../../../util/mixins';

// Form components
export const FormContainer = styled.View`
background-color: #EEEEEF;
padding: ${scaleSize(10)}px;
`
export const Header = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-right: ${scaleSize(20)}px;
`

export const AddButton = styled.TouchableOpacity`

`

export const FormLabel = styled.Text`
font-weight: 400;
`