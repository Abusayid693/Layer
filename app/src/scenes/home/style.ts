import styled from 'styled-components/native';
import { scaleFont, scaleSize } from '../../util/mixins';

export const Container = styled.View`
display: flex;
width: 100%;
padding: 0 ;
padding-bottom: ${scaleFont(100)}px;
padding-top: ${scaleFont(20)}px;
`

export const CardsContainer = styled.ScrollView`
`

export const ContainerLabel = styled.Text`
font-size: ${scaleFont(17)}px;
font-style: normal;
font-weight: 700;
letter-spacing: 0.374px;
margin-top: ${scaleSize(10)}px;
margin-bottom: ${scaleSize(10)}px;
margin-left: ${scaleSize(10)}px;
`

export const SavedModelsContainer = styled.View`
padding: ${scaleSize(10)}px;
padding-top: 0;
`

export const ActionButtonContainer = styled.View`
padding: ${scaleSize(10)}px;
display: flex;
flex-direction: row;
justify-content: space-between;
`