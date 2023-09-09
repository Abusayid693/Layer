import styled from 'styled-components/native';
import { scaleFont, scaleSize } from '../../util/mixins';

export const Container = styled.View`
display: flex;

width: 100%;
height: 100%;
padding: ${scaleSize(10)}px;
`


export const ContentContainer = styled.View`
padding: ${scaleSize(20)}px  ${scaleSize(10)}px;

`

export const ContentText = styled.Text`
font-size: ${scaleFont(30)}px;
`