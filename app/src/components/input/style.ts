import styled from 'styled-components/native';
import { scaleFont, scaleSize } from '../../util/mixins';


export const Container = styled.View`
margin: 5px 0;
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