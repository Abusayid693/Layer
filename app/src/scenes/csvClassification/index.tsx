import * as S from './style';

import { Formik } from 'formik';
import { BackButton } from '../../components';
// Forms
import { useMemo, useRef, useState } from 'react';
import { Button, ScrollView } from 'react-native';
import { FormFive } from './formFive';
import { FormFour } from './formFour';
import { FormOne } from './formOne';
import { FormSix } from './formSiz';
import { FormThree } from './formThree';
import { FormTwo } from './formTwo';

const baseState = {
  name: '',
  optimizer: '',
  learning_rate: '',
  epochs: '',
  batch_size: '',
};

export const CsvClassification = () => {
  const [hiddenLayerCount, setHiddenLayerCount] = useState(1);
  const ref = useRef<any>();

  const initialState = useMemo(() => {
    const layer = `layer${hiddenLayerCount}`;
    const previousState = ref.current?.values ?? baseState

    return {
      ...previousState,
      [layer]: 10,
    };
  }, [hiddenLayerCount]);

  console.log('initialState :', initialState)

  return (
    <ScrollView>
      <S.Container>
        <S.Header>
          <BackButton />
          <S.HeaderTitle>CSV</S.HeaderTitle>
        </S.Header>

        <Button title='Clc' onPress={()=> setHiddenLayerCount((prev)=> (prev+1))} />

        <S.MainBody>
          <Formik
            enableReinitialize
            innerRef={ref}
            initialValues={initialState}
            onSubmit={() => {}}>
            {() => (
              <>
                <FormOne />
                <FormTwo />
                <FormThree />
                <FormFour />
                <FormFive hiddenLayerCount={hiddenLayerCount} />
                <FormSix />
              </>
            )}
          </Formik>
        </S.MainBody>
      </S.Container>
    </ScrollView>
  );
};
