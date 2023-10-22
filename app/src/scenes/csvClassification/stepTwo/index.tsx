import _ from "lodash";
import { useState } from 'react';
import { View } from "react-native";
import { Button, HiddenLayerInput } from '../../../components';
import PlusIcon from '../assets/arrow';
import { STEP_THREE } from "../constant";
import * as S from './style';

export const StepTwo = ({setIndex}: any) => {
  const [layerCount, setLayerCount] = useState(2);

  const [layers, setLayers] = useState<Record<string, string>>({
    layer1: '',
  });

  const handleAddLayers = () => {
    setLayers(prev => ({
      ...prev,
      [`layer${layerCount}`]: '',
    }));

    setLayerCount(prev => prev + 1);
  };

  const handleRemoveLayer = (name:string)=>{
    const prev = layers;
    const newLayers =_.omit(prev, name)
    setLayers(newLayers)
  }

  const handleInput = (name: string, value: string) => {
    setLayers(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const next = ()=>{
    setIndex(STEP_THREE)
  }

  return (
    <S.Container>
      <View>
      <S.Header>
        <S.FormLabel>Hidden Layers</S.FormLabel>
        <S.AddButton onPress={handleAddLayers}>
          <PlusIcon />
        </S.AddButton>
      </S.Header>
      {Object.keys(layers).map(layer => (
        <HiddenLayerInput
          handleInput={handleInput}
          value={layers[layer]}
          key={layer}
          name={layer}
          handleRemoveLayer={handleRemoveLayer}
        />
      ))}
            </View>
       <Button onPress={next} >Next</Button>
    </S.Container>
  );
};