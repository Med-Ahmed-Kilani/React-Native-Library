import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

export type ImageProp = {
  isLocal?: boolean;
  source: number | ImageSourcePropType;
  resizeMode: ImageResizeMode;
  height?: number | string;
  width?: number | string;
  size?: number;
  animated?: boolean;
  margin?: number;
  mTop?: number;
  mBottom?: number;
  mRight?: number;
  mLeft?: number;
  zIndex?: number;
  spinnerColor?: string;
  bRadius?: number;
  bWidth?: number;
  bColor?: string;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  shadow?: boolean;
  style?: StyleProp<ImageStyle>;
};
