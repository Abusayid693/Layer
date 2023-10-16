import { useState } from 'react';
import { HiddenLayerInput } from '../../../components';
import PlusIcon from '../assets/arrow';
import * as S from './style';

export const StepTwo = ({setIndex}: any) => {
  const [layerCount, setLayerCount] = useState(2);

  const [layers, setLayers] = useState({
    layer1: '',
  });

  const handleAddLayers = () => {
    setLayers(prev => ({
      ...prev,
      [`layer${layerCount}`]: '',
    }));

    setLayerCount(prev => prev + 1);
  };

  console.log('layers :', layers)

  return (
    <S.FormContainer>
      <S.Header>
        <S.FormLabel>Hidden Layers</S.FormLabel>
        <S.AddButton onPress={handleAddLayers}>
          <PlusIcon />
        </S.AddButton>
      </S.Header>
      <HiddenLayerInput name={`layer`} />
    </S.FormContainer>
  );
};
