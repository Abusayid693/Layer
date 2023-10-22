import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { scaleSize } from '../../../util/mixins';

export const Container = styled.View`
background-color: #EEEEEF;
padding: ${scaleSize(10)}px;
position: relative;
height: ${Dimensions.get("window").height - 200};
width: 100%;

justify-content: space-between;
`

export const Header = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-right: ${scaleSize(20)}px;
`

export const AddButton = styled.TouchableOpacity`

`

export const FormLabel = styled.Text`
font-weight: 400;
`

export const UploadContainer = styled.View`
padding-bottom: ${scaleSize(10)}px;
`

export const UploadThumnail = styled.View`
margin: ${scaleSize(15)}px 0;
padding: ${scaleSize(10)}px;
padding-top: ${scaleSize(25)}px;
padding-bottom: ${scaleSize(25)}px;
border: ${scaleSize(1)}px solid #D7D7D7;
border-radius: ${scaleSize(10)}px;

position: relative;
`

export const FileName = styled.Text`
margin-top: ${scaleSize(15)}px;
`

export const FileSize = styled.Text`
margin-top: ${scaleSize(5)}px;
`

export const DeselectButton = styled.TouchableOpacity`
position: absolute;
top: 15;
right: 15;
`

export const FolderSelector = styled.TouchableOpacity`
margin-top: ${scaleSize(10)}px;
background: white;
color: red;
padding: ${scaleSize(40)}px 0;
`