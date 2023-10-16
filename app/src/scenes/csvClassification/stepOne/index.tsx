
import { Formik } from 'formik';
// Forms
import { useRef } from 'react';
import { Button } from '../../../components';
import { STEP_TWO } from '../constant';
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

export const StepOne = ({setIndex}:any) => {
  const ref = useRef<any>();

  const handleSubmit = ()=>{
    setIndex(STEP_TWO)
  }

  return (
    <Formik
      enableReinitialize
      innerRef={ref}
      initialValues={baseState}
      onSubmit={handleSubmit}>
      {({submitForm}) => (
        <>
          <FormOne />
          <FormTwo />
          <FormThree />
          <FormFour />
          <FormFive/>
          <FormSix />
          <Button onPress={submitForm} >Next</Button>
        </>
      )}
    </Formik>
  );
};
