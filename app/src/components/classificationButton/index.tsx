import { TouchableOpacity } from 'react-native';
import PlusIcon from './assets/plus';
import * as S from './style';

export const ClassificationButton = ({isImage, ...any}: any) => {
  return (
    <TouchableOpacity style={{width: '49%'}} {...any}>
      <S.Container style={{backgroundColor: isImage ? '#AD290C' : '#2A0F97'}}>
        <PlusIcon />
        <S.ButtonText>{isImage ? 'Image' :'CSV'}</S.ButtonText>
      </S.Container>
    </TouchableOpacity>
  );
};
