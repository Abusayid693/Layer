import { TouchableOpacity } from 'react-native';
import * as S from './style';

import DeleteIcon from './assets/delete';

export const HiddenLayerInput = ({
  handleInput,
  name,
  handleRemoveLayer,
  ...any
}: any) => {
  return (
    <S.Container>
      <S.ContainerInput isGroup>
        <S.InputContainer
          onChangeText={e => handleInput(name, e)}
          isError={false}
          placeholder="10"
          {...any}
        />
      </S.ContainerInput>

      <TouchableOpacity onPress={() =>handleRemoveLayer(name)} >
        <S.DeleteButton>
          <DeleteIcon />
        </S.DeleteButton>
      </TouchableOpacity>
    </S.Container>
  );
};
