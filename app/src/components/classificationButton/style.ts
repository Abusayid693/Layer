import styled from 'styled-components/native';
import { scaleSize } from '../../util/mixins';


export const Container = styled.View`
background-color: #2A0F97;
display: flex;
align-items: center;
border-radius: ${scaleSize(10)}px;
padding: ${scaleSize(10)}px 0;
`

export const ButtonText = styled.Text`
color: white;
`