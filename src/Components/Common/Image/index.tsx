import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image as CImage,
  ImageProps,
} from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {Images} from '../../../Assets';
import Colors from '../../../Constants/Colors';
//Types
import {ImageProp} from './Types';
//Constants

const Image: React.FC<ImageProp> = props => {
  const {
    height,
    width,
    source,
    size,
    animated,
    resizeMode,
    margin,
    mTop,
    mBottom,
    mRight,
    mLeft,
    zIndex,
    style,
    spinnerColor,
    bRadius,
    bColor,
    bWidth,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    shadow,
    isLocal,
    ...rest
  } = props;
  const [isLoaded, setIsLoaded] = React.useState<Boolean>(false);
  const [crached, setCrached] = React.useState<Boolean>(false);

  //useEffect
  React.useEffect(() => {
    // setIsLoaded(false);
    setCrached(false);
  }, [source]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isLoaded ? 1 : 0, {duration: 400}),
    };
  });

  return (
    <View
    //   style={
    //     typeof mTop==='number'&& {marginTop:mTop}
    // }
    //   mTop={mTop}
    //   mLeft={mLeft}
    //   width={width}
    //   height={height}
    //   margin={margin}
    //   zIndex={zIndex}
    //   bRadius={bRadius}
    //   shadow={isLoaded && shadow}
    //   bColor={bColor}
    //   bWidth={bWidth}
    //   btlRadius={borderTopLeftRadius}
    //   btrRadius={borderTopRightRadius}
    //   bblRadius={borderBottomLeftRadius}
    //   bbrRadius={borderBottomRightRadius}
    >
      {!isLoaded && !isLocal && (
        <View style={[StyleSheet.absoluteFill, styles.spinner]}>
          <ActivityIndicator color={Colors['White']} size={24} />
        </View>
      )}
      <AnimatedImage
        style={[
          {
            width: size || width,
            height: size || height,
            borderRadius: bRadius,
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,
          },
          style,
          animated && animatedStyle,
        ]}
        onLoadEnd={() => setIsLoaded(true)}
        onError={() => setCrached(true)}
        source={crached ? Images.DefaultImage : source}
        resizeMode={resizeMode}
        {...rest}
      />
    </View>
  );
};

const AnimatedImage = Reanimated.createAnimatedComponent(CImage);

const styles = StyleSheet.create({
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {},
});

export {Image};
