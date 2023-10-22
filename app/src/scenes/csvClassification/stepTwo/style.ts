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