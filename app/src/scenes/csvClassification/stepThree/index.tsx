import * as React from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import DocumentPicker, {
    DirectoryPickerResponse,
    DocumentPickerResponse,
    isCancel,
    isInProgress,
} from 'react-native-document-picker';
import { Button } from '../../../components/button';
import PlusIcon from '../assets/arrow';
import CrossIcon from '../assets/cross';
import CsvIcon from '../assets/csv';
import * as S from './style';

import { getSignedS3Token, uploadToS3 } from '../../../services';

export const StepThree = ({}: any) => {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | any
  >([]);

  useEffect(() => {
    // @ts-ignore
    console.log(JSON.stringify(result, null, 2), result.length);
  }, [result]);

  const handleError = (err: unknown) => {
    if (isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  const getSignedUrl = async () => {
    const {data} = await getSignedS3Token({
      object_key: result[0].name+'android',
    });

    return data
  };

  const uploadCSV = async () => {
    setLoading(true);

    try {
     const signedImageResponse:any = await getSignedUrl();

     console.log('signedImageResponse :', signedImageResponse)

      await uploadToS3(
        signedImageResponse.data,
        result[0],
        result[0].type,
      );
    } catch (error:any) {
        console.log('error :', error)
    }
    setLoading(false);
  };

  return (
    <S.Container>
      <View>
        <S.Header>
          <S.FormLabel>Upload CSVs</S.FormLabel>
          <S.AddButton>
            <PlusIcon />
          </S.AddButton>
        </S.Header>
        <S.UploadContainer>
          {/* @ts-ignore */}
          {result.length > 0 ? (
            <S.UploadThumnail>
              <View>
                <CsvIcon />
              </View>
              <View>
                <S.FileName>{result[0].name}</S.FileName>
                <S.FileSize>{result[0].size / 1000} KB </S.FileSize>
              </View>
              <S.DeselectButton onPress={() => setResult([])}>
                <CrossIcon />
              </S.DeselectButton>
            </S.UploadThumnail>
          ) : (
            <S.FolderSelector
              onPress={async () => {
                try {
                  const pickerResult = await DocumentPicker.pickSingle({
                    presentationStyle: 'fullScreen',
                    copyTo: 'cachesDirectory',
                  });
                  setResult([pickerResult]);
                } catch (e) {
                  handleError(e);
                }
              }}>
              <Text> open picker for single file selection</Text>
            </S.FolderSelector>
          )}
        </S.UploadContainer>
      </View>

      <Button onPress={uploadCSV} loading={loading}>
        Continue
      </Button>
    </S.Container>
  );
};
