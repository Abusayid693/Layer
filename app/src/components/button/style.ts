import styled from 'styled-components/native';
import { scaleFont, scaleSize } from '../../util/mixins';

export const Container = styled.View`
background: #000;
border-radius: ${scaleSize(16)}px;
padding: ${scaleSize(14)}px ${scaleSize(20)}px;

display: flex;
align-items: center;
justify-content: center;
`

export const ButtonText = styled.Text<{isDisabled:boolean}>`
color: #fff;
font-size: ${scaleFont(17)}px;

${({isDisabled}) =>
isDisabled &&
`opacity: 0.5;
`};
`

export const BackBtnContainer = styled.View`
width: ${scaleSize(40)}px;
height: ${scaleSize(40)}px;
background: #EEEEEF;
border-radius: ${scaleSize(32)}px;

display: flex;
align-items: center;
justify-content: center;

`