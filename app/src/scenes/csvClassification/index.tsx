import { ScrollView } from 'react-native';
import { BackButton } from '../../components';
import * as S from './style';
// Forms
import { useState } from 'react';
import { STEP_ONE } from './constant';
import { StepOne } from './stepOne';

export const CsvClassification = () => {
  const [index, setIndex] = useState(STEP_ONE);

  const renderContent = () => {
    if (index === STEP_ONE) return <StepOne />;
  };

  return (
    <ScrollView>
      <S.Container>
        <S.Header>
          <BackButton />
          <S.HeaderTitle>CSV</S.HeaderTitle>
        </S.Header>

        <S.MainBody>{renderContent()}</S.MainBody>
      </S.Container>
    </ScrollView>
  );
};
