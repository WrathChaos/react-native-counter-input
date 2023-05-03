import * as React from 'react';
import {TextInput, View, Image, StyleProp, ViewStyle} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import useStateWithCallback from './helpers/useStateWithCallback';
/**
 * ? Local Imports
 */
import styles, {
  _container,
  _increaseButtonStyle,
  _decreaseButtonStyle,
} from './CounterInput.style';
// ? White Assets
const plusIconWhite = require('./local-assets/plus-white.png');
const minusIconWhite = require('./local-assets/minus-white.png');
// ? Black Assets
const plusIconBlack = require('./local-assets/plus-black.png');
const minusIconBlack = require('./local-assets/minus-black.png');

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface CounterInputProps {
  style?: CustomStyleProp;
  initial?: number;
  ImageComponent?: any;
  horizontal?: boolean;
  backgroundColor?: string;
  increaseButtonBackgroundColor?: string;
  decreaseButtonBackgroundColor?: string;
  width?: number;
  height?: number;
  min?: number;
  max?: number;
  borderRadius?: number;
  reverseCounterButtons?: boolean;
  onIncreasePress?: (counter: number) => void;
  onDecreasePress?: (counter: number) => void;
  onChangeText?: (counter: number | string) => void;
  onChange: (counter: number) => void;
}

const CounterInput: React.FC<CounterInputProps> = ({
  style,
  initial,
  horizontal = false,
  reverseCounterButtons = false,
  backgroundColor = '#fff',
  width = horizontal ? 170 : undefined,
  borderRadius = 24,
  onChange,
  onIncreasePress,
  min,
  max,
  onChangeText,
  onDecreasePress,
  ImageComponent = Image,
  decreaseButtonBackgroundColor = '#0b349a',
  increaseButtonBackgroundColor = '#0b349a',
}) => {
  const [counter, setCounter] = useStateWithCallback<number>(initial || 0);
  // ? if true: it's for increase button, if false: it's for decrease button
  const [isPressed, setPressed] = useStateWithCallback<boolean>(true);

  const handleOnIncreasePress = () => {
    if (max === undefined || counter < max) {
      setCounter(counter + 1, (newCounterValue: any) => {
        onChange?.(newCounterValue);

        setPressed(true, () => {
          onIncreasePress && onIncreasePress(newCounterValue);
        });
      });
    }
  };

  const handleOnDecreasePress = () => {
    if (min === undefined || counter > min) {
      setCounter(counter - 1, (newCounterValue: any) => {
        onChange?.(newCounterValue);

        setPressed(false, () => {
          onDecreasePress && onDecreasePress(newCounterValue);
        });
      });
    }
  };

  const handleOnChangeText = (text: string) => {
    let input = parseInt(text, 10) || 0;
    let oldNumber = counter;
    if (
      (min !== undefined && input < min) ||
      (max !== undefined && input > max)
    ) {
      setCounter(0, () => {
        setPressed(false, () => {
          setCounter(oldNumber, (newCounterValue: any) => {
            onChangeText?.(newCounterValue);
            onChange?.(newCounterValue);
          });
        });
      });
    } else {
      setCounter(input, (newCounterValue: any) => {
        onChangeText?.(newCounterValue);
        onChange?.(newCounterValue);
      });
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderIncreaseCounter = () => {
    return (
      <RNBounceable
        style={_increaseButtonStyle(isPressed, increaseButtonBackgroundColor)}
        bounceEffectIn={0.8}
        bounceVelocityIn={2}
        onPress={handleOnIncreasePress}>
        <ImageComponent
          style={styles.buttonImageStyle}
          source={isPressed ? plusIconWhite : plusIconBlack}
        />
      </RNBounceable>
    );
  };

  const renderDecreaseCounter = () => {
    return (
      <RNBounceable
        style={_decreaseButtonStyle(isPressed, decreaseButtonBackgroundColor)}
        bounceEffectIn={0.8}
        bounceVelocityIn={2}
        onPress={handleOnDecreasePress}>
        <ImageComponent
          style={styles.buttonImageStyle}
          source={isPressed ? minusIconBlack : minusIconWhite}
        />
      </RNBounceable>
    );
  };

  const renderTextInput = () => {
    return (
      <TextInput
        numberOfLines={1}
        keyboardType="numeric"
        style={styles.textInputStyle}
        onChangeText={handleOnChangeText}>
        {counter}
      </TextInput>
    );
  };

  return (
    <View
      style={[
        _container(width, horizontal, backgroundColor, borderRadius),
        style,
      ]}>
      {reverseCounterButtons
        ? renderDecreaseCounter()
        : renderIncreaseCounter()}
      {renderTextInput()}
      {reverseCounterButtons
        ? renderIncreaseCounter()
        : renderDecreaseCounter()}
    </View>
  );
};

export default CounterInput;
