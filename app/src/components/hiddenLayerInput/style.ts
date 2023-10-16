import styled from 'styled-components/native';
import { scaleSize } from '../../util/mixins';

export const Container = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`

export const DeleteButton = styled.View`
width: ${scaleSize(60)}px;
border-radius: ${scaleSize(10)}px;
height: ${scaleSize(50)}px;

display: flex;
align-items: center;
justify-content: center;
`