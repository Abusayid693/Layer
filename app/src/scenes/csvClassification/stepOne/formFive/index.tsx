import { View } from 'react-native';
import { Input } from "../../../../components";
import * as S from '../style';

export const FormFive = () => {
  return (
    <S.FormContainer>
      <S.InputGroup>
        <View style={{width: '50%'}}>
          <S.FormLabel>Features</S.FormLabel>
          <Input name="learning_rate" />
        </View>
        <View style={{width: '50%'}}>
          <S.FormLabel>Classes</S.FormLabel>
          <Input name="learning_rate" />
        </View>
      </S.InputGroup>
      <S.FormNoteContainer>
        <S.FormNoteMessage>
          Note: Please put features and classes according to your csv file
        </S.FormNoteMessage>
      </S.FormNoteContainer>
    </S.FormContainer>
  );
};
