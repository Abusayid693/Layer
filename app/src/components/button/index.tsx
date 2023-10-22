import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import ArrowIcon from './assets/arrow';
import * as S from './style';

export const Button = ({children, loading, ...any}: any) => {
  return (
    <TouchableOpacity {...any} disabled={loading}>
      <S.Container>
        {/* @ts-ignore */}
        {!loading && <S.ButtonText>{children}</S.ButtonText>}
        {loading && <ActivityIndicator />}
      </S.Container>
    </TouchableOpacity>
  );
};

export const ButtonLight = ({children, loading, ...any}: any) => {
  return (
    <TouchableOpacity {...any} disabled={loading}>
      <S.Container isLight>
        {/* @ts-ignore */}
        {!loading && <S.ButtonText isLight>{children}</S.ButtonText>}
        {loading && <ActivityIndicator />}
      </S.Container>
    </TouchableOpacity>
  );
};

export const BackButton = ({...any}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} {...any}>
      <S.BackBtnContainer >
        <ArrowIcon />
      </S.BackBtnContainer>
    </TouchableOpacity>
  );
};


export const BackButtonOnAction = ({action,...any}:any) => {

  return (
    <TouchableOpacity onPress={action} {...any}>
      <S.BackBtnContainer >
        <ArrowIcon />
      </S.BackBtnContainer>
    </TouchableOpacity>
  );
};


export const IconButton = ({onPress,children,...any}:any) => {

  return (
    <TouchableOpacity onPress={onPress} {...any}>
      <S.BackBtnContainer >
       {children}
      </S.BackBtnContainer>
    </TouchableOpacity>
  );
};
