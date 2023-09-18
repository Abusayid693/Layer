import { TouchableOpacity } from 'react-native';
import ArrowIcon from './assets/arrow';
import CsvIcon from './assets/csv';
import ImageIcon from './assets/image';
import * as S from './style';

export const SavedModelCard = ({isImage}: any) => {
  return (
    <TouchableOpacity>
      <S.Container>
        <S.LeftContainer>
          {isImage ? <ImageIcon /> : <CsvIcon style={{width: 10}} />}
        </S.LeftContainer>

        <S.RightContainer>
          <S.ModelName>Fruits classification</S.ModelName>
          <S.ModelClasses>5 classes</S.ModelClasses>
        </S.RightContainer>
        <S.RightArrow>
          <ArrowIcon />
        </S.RightArrow>
      </S.Container>
    </TouchableOpacity>
  );
};
