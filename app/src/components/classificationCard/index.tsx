import { TouchableOpacity } from 'react-native';
import * as S from './style';

export const ClassificationCard = () => {
  return (
    <TouchableOpacity>
    
    <S.Container>
      <S.Header>
        <S.Title>Fruits classification</S.Title>
        <S.Subtitle>Image classification</S.Subtitle>
      </S.Header>

      <S.Footer>
        <S.ClassesText>1000 classes</S.ClassesText>
      </S.Footer>
    </S.Container>
    </TouchableOpacity>
  );
};
