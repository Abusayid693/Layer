import styled from 'styled-components/native';
import { scaleFont } from '../../util/mixins';

export const Container = styled.View<{isGroup: boolean}>`
margin: 5px 0;
${({isGroup}) =>
isGroup &&
`flex: 1;
`};
`


export const Label = styled.Text`
font-size: ${scaleFont(17)}px;
font-weight: 600;
`

export const ErrorLabel = styled.Text`
font-size: ${scaleFont(12)}px;
color: red;
`