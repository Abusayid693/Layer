import { Input } from '../../../components';
import * as S from '../style';

export const FormFour = () => {
  return (
    <S.FormContainer>
      <S.FormLabel>Epochs</S.FormLabel>
      <Input name="epochs" />
    </S.FormContainer>
  );
};
