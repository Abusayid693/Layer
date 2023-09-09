import styled from 'styled-components/native';
import { scaleFont, scaleSize } from '../../util/mixins';

export const Container = styled.View<{isLight?: boolean}>`
  background: ${({isLight}) => (isLight ? `white` : '#000')};
  border-radius: ${scaleSize(16)}px;
  padding: ${scaleSize(14)}px ${scaleSize(20)}px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${scaleSize(5)}px;
`;

export const ButtonText = styled.Text<{isDisabled: boolean; isLight?: boolean}>`
  color: ${({isLight}) => (isLight ? `#000` : '#fff')};
  font-size: ${scaleFont(17)}px;
  ${({isDisabled}) =>
    isDisabled &&
    `opacity: 0.5;
`};
`;

export const BackBtnContainer = styled.View`
  width: ${scaleSize(40)}px;
  height: ${scaleSize(40)}px;
  background: #eeeeef;
  border-radius: ${scaleSize(32)}px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
