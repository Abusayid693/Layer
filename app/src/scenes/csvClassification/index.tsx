import { ScrollView } from 'react-native';
import { BackButtonOnAction } from '../../components';
import * as S from './style';
// Forms
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { STEP_ONE, STEP_TWO } from './constant';
import { StepOne } from './stepOne';
import { StepTwo } from './stepTwo';

export const CsvClassification = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(STEP_ONE);

  const renderContent = () => {
    if (index === STEP_ONE) return <StepOne setIndex={setIndex} />;
    if (index === STEP_TWO) return <StepTwo setIndex={setIndex} />;
  };

  const handleBack = () => {
    if (index === STEP_TWO) {
      setIndex(STEP_ONE);
      return;
    }
    navigation.goBack();
  };

  return (
    <ScrollView>
      <S.Container>
        <S.Header>
          <BackButtonOnAction action={handleBack} />
          <S.HeaderTitle>CSV</S.HeaderTitle>
        </S.Header>

        <S.MainBody>{renderContent()}</S.MainBody>
      </S.Container>
    </ScrollView>
  );
};
