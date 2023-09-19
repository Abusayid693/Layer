import * as S from './style';

import { Formik } from 'formik';
import { BackButton } from '../../components';
// Forms
import { ScrollView } from 'react-native';
import { FormFour } from "./formFour";
import { FormOne } from './formOne';
import { FormThree } from './formThree';
import { FormTwo } from './formTwo';

export const CsvClassification = () => {
  return (
    <ScrollView>
    <S.Container>
      <S.Header>
        <BackButton />
        <S.HeaderTitle>CSV</S.HeaderTitle>
      </S.Header>

      <S.MainBody>
        <Formik
          initialValues={{
            name: '',
            optimizer: '',
            learning_rate: '',
            epochs:''
          }}
          onSubmit={() => {}}>
          {() => (
            <>
              <FormOne />
              <FormTwo />
              <FormThree />
              <FormFour/>
            </>
          )}
        </Formik>
      </S.MainBody>
    </S.Container>
    </ScrollView>
  );
};
