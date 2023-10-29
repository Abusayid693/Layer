import { View } from 'react-native';
import * as S from './style';

const baseState = {
  name: '',
  optimizer: '',
  learning_rate: '',
  epochs: '',
  batch_size: '',
};

const userValues = [
  {
    label: 'Model Name',
    key: 'name',
  },
  {
    label: 'Optimizer',
    key: 'optimizer',
  },
  {
    label: 'Learning Rate',
    key: 'learning_rate',
  },
  {
    label: 'Epochs',
    key: 'epochs',
  },
  {
    label: 'Batch Size',
    key: 'batch_size',
  },
];

export const StepFour = ({}: any) => {
  return (
    <S.Container>
      <View>
        <S.Header>
          <S.FormLabel>Result</S.FormLabel>
          <S.AddButton title='Edit' />
        </S.Header>
      </View>

      <S.ListContainer>
        {userValues.map(item => (
          <S.Row>
            <S.RowText>{item.label}</S.RowText>
            <S.RowValue>{item.key}</S.RowValue>
          </S.Row>
        ))}
      </S.ListContainer>
    </S.Container>
  );
};
