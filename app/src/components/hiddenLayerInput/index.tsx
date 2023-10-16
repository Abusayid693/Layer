import { TouchableOpacity } from 'react-native';
import { Input } from '../input';
import * as S from './style';

import DeleteIcon from "./assets/delete";

export const HiddenLayerInput = ({...any}) => {
  return (
    <S.Container>
      <Input {...any} isGroup />
      <TouchableOpacity>
        <S.DeleteButton>
          <DeleteIcon/>
        </S.DeleteButton>
      </TouchableOpacity>
    </S.Container>
  );
};
