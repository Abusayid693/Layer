
import { Formik } from 'formik';
// Forms
import { useRef } from 'react';
import * as Yup from 'yup';
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  optimizer: Yup.string().required('Required'),
  learning_rate: Yup.string().required('Required'),
  epochs: Yup.string().required('Required'),
  batch_size: Yup.string().required('Required'),
});


export const StepOne = ({setIndex, setMainState, mainState}:any) => {
  const ref = useRef<any>();

  const handleSubmit = (values:any)=>{
    console.log('values :', values)
    setIndex(STEP_TWO)
    setMainState((prev:any)=>({...prev, stepOne:{...values} }))
  }



  return (
    <Formik
      enableReinitialize
      innerRef={ref}
      initialValues={mainState.stepOne}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      >
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
