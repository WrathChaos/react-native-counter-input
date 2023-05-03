import {ViewStyle, ImageStyle, TextStyle, StyleSheet} from 'react-native';

interface Style {
  textInputStyle: TextStyle;
  buttonImageStyle: ImageStyle;
}

export const _container = (
  width: number | undefined,
  horizontal: boolean,
  backgroundColor: string,
  borderRadius: number,
): ViewStyle => ({
  width: width,
  backgroundColor,
  borderRadius: borderRadius,
  padding: horizontal ? 0 : 9,
  minHeight: horizontal ? 45 : 140,
  maxWidth: horizontal ? undefined : 70,
  flexDirection: horizontal ? 'row' : 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  shadowRadius: 8,
  shadowOpacity: 0.2,
  shadowColor: '#000',
  elevation: 2,
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export const _increaseButtonStyle = (
  isPressed: boolean,
  increaseButtonBackgroundColor: string,
): ViewStyle => ({
  width: 40,
  height: 40,
  borderRadius: 16,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: isPressed ? increaseButtonBackgroundColor : 'transparent',
  shadowOpacity: isPressed ? 0.1 : 0,
  shadowRadius: 3,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export const _decreaseButtonStyle = (
  isPressed: boolean,
  decreaseButtonBackgroundColor: string,
): ViewStyle => ({
  width: 40,
  height: 40,
  borderRadius: 16,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: isPressed ? 'transparent' : decreaseButtonBackgroundColor,
  shadowOpacity: isPressed ? 0 : 0.1,
  shadowRadius: 3,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export default StyleSheet.create<Style>({
  textInputStyle: {
    width: 40,
    minHeight: 40,
    fontSize: 24,
    marginTop: 12,
    marginBottom: 8,
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonImageStyle: {
    width: 15,
    height: 15,
  },
});
