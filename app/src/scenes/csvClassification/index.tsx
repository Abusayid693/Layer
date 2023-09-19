import * as S from './style';

import { Formik } from 'formik';
import { BackButton } from '../../components';
// Forms
import { FormOne } from './formOne';

export const CsvClassification = () => {
  return (
    <S.Container>
      <S.Header>
        <BackButton />
        <S.HeaderTitle>CSV</S.HeaderTitle>
      </S.Header>

      <S.MainBody>
        <Formik
          initialValues={{
            name: '',
          }}
          initialErrors={{email: 'Required'}}
          //   validationSchema={validationSchema[screenIndex]}
          onSubmit={() => {}}>
          {({handleChange, handleBlur, handleSubmit, values}) => <FormOne />}
        </Formik>
      </S.MainBody>
    </S.Container>
  );
};
