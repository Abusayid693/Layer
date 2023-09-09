import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import ArrowIcon from './assets/arrow';
import * as S from './style';

export const Button = ({children,...any}:any) => {
  return (
    <TouchableOpacity {...any}>
    <S.Container>
        {/* @ts-ignore */}
        <S.ButtonText>{children}</S.ButtonText>
    </S.Container>
    </TouchableOpacity>
  );
};

export const BackButton = ({...any}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <S.BackBtnContainer>
        <ArrowIcon />
    </S.BackBtnContainer>
    </TouchableOpacity>
  );
};
