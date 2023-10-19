import * as React from 'react';
import PlusIcon from '../assets/arrow';
import * as S from './style';

// import { useEffect } from 'react';
// import { Button } from 'react-native';
// import DocumentPicker, {
//     DirectoryPickerResponse,
//     DocumentPickerResponse,
//     isCancel,
//     isInProgress
// } from 'react-native-document-picker';

export const StepThree = ({}: any) => {
//   const [result, setResult] = React.useState<
//     Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
//   >();

//   useEffect(() => {
//     console.log(JSON.stringify(result, null, 2));
//   }, [result]);

//   const handleError = (err: unknown) => {
//     if (isCancel(err)) {
//       console.warn('cancelled');
//       // User cancelled the picker, exit any dialogs or menus and move on
//     } else if (isInProgress(err)) {
//       console.warn(
//         'multiple pickers were opened, only the last will be considered',
//       );
//     } else {
//       throw err;
//     }
//   };

  return (
    <S.Container>
      <S.Header>
        <S.FormLabel>Upload CSV</S.FormLabel>
        <S.AddButton>
          <PlusIcon />
        </S.AddButton>
      </S.Header>
      {/* <Button
        title="open picker for single file selection"
        onPress={async () => {
          try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            })
            setResult([pickerResult])
          } catch (e) {
            handleError(e)
          }
        }}
      /> */}
    </S.Container>
  );
};
