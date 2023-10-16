
import { Formik } from 'formik';
// Forms
import { useMemo, useRef, useState } from 'react';
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

export const StepOne = () => {
  const [hiddenLayerCount, setHiddenLayerCount] = useState(1);
  const ref = useRef<any>();

  const initialState = useMemo(() => {
    const layer = `layer${hiddenLayerCount}`;
    const previousState = ref.current?.values ?? baseState;

    return {
      ...previousState,
      [layer]: 10,
    };
  }, [hiddenLayerCount]);

  console.log('initialState :', initialState);

  return (
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
  );
};
