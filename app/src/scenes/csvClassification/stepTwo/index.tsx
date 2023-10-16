import { HiddenLayerInput } from "../../../components";
import * as S from '../style';

export const StepTwo = ({setIndex}:any) => {
  return (
    <S.FormContainer>
      <S.FormLabel>Hidden Layers</S.FormLabel>
        <HiddenLayerInput name={`layer`} />
    </S.FormContainer>
  );
};
