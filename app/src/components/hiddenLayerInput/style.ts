import styled from 'styled-components/native';
import { scaleSize } from '../../util/mixins';

import { scaleFont } from '../../util/mixins';


export const Container = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`
export const ContainerInput = styled.View<{isGroup: boolean}>`
margin:  0;
${({isGroup}) =>
isGroup &&
`flex: 1;
`};
`


export const InputContainer = styled.TextInput<{isError:boolean}>`
height: ${scaleSize(50)}px;
padding: ${scaleSize(10)}px;
border: ${scaleSize(1)}px solid ${props => (props.isError ? "red" : "#D7D7D7")};;
border-radius: ${scaleSize(16)}px;
font-size: ${scaleFont(17)}px;
margin-bottom: ${scaleSize(5)}px;
margin-top: ${scaleSize(10)}px;
`

export const Label = styled.Text`
font-size: ${scaleFont(17)}px;
font-weight: 600;
`

export const ErrorLabel = styled.Text`
font-size: ${scaleFont(12)}px;
color: red;
`

export const DeleteButton = styled.View`
width: ${scaleSize(60)}px;
border-radius: ${scaleSize(10)}px;
height: ${scaleSize(50)}px;

display: flex;
align-items: center;
justify-content: center;
`