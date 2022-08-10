import React from 'react';
import {StyleSheet, View} from 'react-native';
import DropdownAlert, {DropdownAlertProps} from 'react-native-dropdownalert';
import LottieView from 'lottie-react-native';
import {DropDownHolder} from '../../../Utils';

//ContextAPI
//components
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Animations} from '../../../Assets/index';
import Colors from '../../../Constants/Colors';
//Types

const Alert: React.FC<DropdownAlertProps> = props => {
  const renderImage = (
    _: DropdownAlertProps,
    state: {
      type: string;
    },
  ) => {
    if (state.type === 'success') {
      return (
        <View style={styles.container}>
          <LottieView
            source={Animations.SuccessAnimation}
            loop={false}
            autoPlay
            style={{
              width: 50,
              height: 50,
            }}
          />
        </View>
      );
    } else if (state.type === 'error') {
      return (
        <View style={styles.container}>
          <LottieView
            source={Animations.ErrorAnimation}
            loop={false}
            autoPlay
            style={{
              width: 50,
              height: 50,
            }}
          />
        </View>
      );
    } else if (state.type === 'warn') {
      return (
        <View style={styles.container}>
          <LottieView
            source={Animations.WarnAnimation}
            loop={false}
            autoPlay
            style={{
              width: 50,
              height: 50,
            }}
          />
        </View>
      );
    }
    return null;
  };
  const renderCancel = () => {
    return (
      <AntDesign
        name="closecircleo"
        size={24}
        color={Colors['Silver Metallic']}
      />
    );
  };
  return (
    <DropdownAlert
      {...props}
      ref={(ref: DropdownAlert | null) => DropDownHolder.setDropDown(ref)}
      updateStatusBar={false}
      useNativeDriver
      renderImage={renderImage}
      renderCancel={renderCancel}
      showCancel
      defaultContainer={styles.defaultContainer}
      messageStyle={styles.messageStyle}
      successColor="#012044"
      errorColor="#012044"
      warnColor="#012044"
      infoColor=""
    />
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', padding: 4},
  defaultContainer: {
    flexDirection: 'row',
    padding: 8,
    margin: 16,
    marginTop: 50,
    borderRadius: 8,
  },
  messageStyle: {
    marginTop: 8,
    fontSize: 12,
    color: '#cccccc',
  },
});
export {Alert};
