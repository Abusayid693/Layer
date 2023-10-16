import { TouchableOpacity } from 'react-native';
import * as S from './style';

import DeleteIcon from './assets/delete';

export const HiddenLayerInput = ({...any}) => {
  return (
    <S.Container>
      <S.ContainerInput isGroup>
        <S.InputContainer
          onChangeText={e => {}}
          value={'10'}
          isError={false}
          {...any}
        />
      </S.ContainerInput>

      <TouchableOpacity>
        <S.DeleteButton>
          <DeleteIcon />
        </S.DeleteButton>
      </TouchableOpacity>
    </S.Container>
  );
};
