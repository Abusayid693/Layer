import { View } from 'react-native';
import { Button } from '../../../components/button';
import CsvIcon from '../assets/csv';
import * as F from '../stepThree/style';
import * as S from './style';

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

export const StepFour = ({mainState}: any) => {
  return (
    <S.Container>
      <View>
        <S.Header>
          <S.FormLabel>Result</S.FormLabel>
          <S.AddButton title="Edit" />
        </S.Header>
      </View>

      <S.ListContainer>
        {userValues.map(item => (
          <S.Row>
            <S.RowText>{item.label}</S.RowText>
            <S.RowValue>{mainState.stepOne[item.key]}</S.RowValue>
          </S.Row>
        ))}
      </S.ListContainer>

      <View>
        <S.Header>
          <S.FormLabel>Hidden Layers</S.FormLabel>
          <S.AddButton title="Edit" />
        </S.Header>
      </View>
      <S.ListContainer>
        {Object.keys(mainState.stepTwo).map(layer => (
          <S.HiddenLayerInput>{mainState.stepTwo[layer]}</S.HiddenLayerInput>
        ))}
      </S.ListContainer>

      <View>
        <S.Header>
          <S.FormLabel>File</S.FormLabel>
          <S.AddButton title="Edit" />
        </S.Header>
      </View>

      <F.UploadThumnail>
        <View>
          <CsvIcon />
        </View>
        <View>
          <F.FileName>{mainState.stepThree.name}</F.FileName>
          <F.FileSize>{mainState.stepThree.size / 1000} KB </F.FileSize>
        </View>
      </F.UploadThumnail>

      <Button>
        Train
      </Button>
      
    </S.Container>
  );
};
