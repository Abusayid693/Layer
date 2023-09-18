import { TouchableOpacity } from 'react-native';
import PlusIcon from './assets/plus';
import * as S from './style';

export const ClassificationButton = ({isImage}: any) => {
  return (
    <TouchableOpacity style={{width: '49%'}}>
      <S.Container style={{backgroundColor: isImage ? '#AD290C' : '#2A0F97'}}>
        <PlusIcon />
        <S.ButtonText>Image</S.ButtonText>
      </S.Container>
    </TouchableOpacity>
  );
};
