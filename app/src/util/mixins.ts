import { Dimensions, PixelRatio } from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;

const guidelineBaseWidth = 375;

export const scaleSize = (size:any) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size:any) => size * PixelRatio.getFontScale();
