import * as React from 'react';
import {TextInput, View, Image, StyleProp, ViewStyle} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
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

export interface ICounterInputProps {
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
  onIncreasePress?: (counter: number) => void;
  onDecreasePress?: (counter: number) => void;
  onChangeText?: (counter: number | string) => void;
  onChange: (counter: number) => void;
}

interface IState {
  counter: number;
  isPressed: boolean;
}

export default class CounterInput extends React.Component<
  ICounterInputProps,
  IState
> {
  constructor(props: ICounterInputProps) {
    super(props);
    this.state = {
      counter: props.initial || 0,
      isPressed: true, // ? if true: its for increase button, if false: its for decrease button
    };
  }

  handleOnIncreasePress = () => {
    const {onChange, onIncreasePress, max} = this.props;
    if (max === undefined || this.state.counter < max) {
      this.setState({isPressed: true, counter: this.state.counter + 1}, () => {
        onIncreasePress && onIncreasePress(this.state.counter);
        onChange && onChange(this.state.counter);
      });
    }
  };

  handleOnDecreasePress = () => {
    const {onChange, onDecreasePress, min} = this.props;
    if (min === undefined || this.state.counter > min) {
      this.setState({isPressed: false, counter: this.state.counter - 1}, () => {
        onDecreasePress && onDecreasePress(this.state.counter);
        onChange && onChange(this.state.counter);
      });
    }
  };

  handleOnChangeText = (text: string) => {
    const {onChange, onChangeText, min, max} = this.props;
    let input = parseInt(text, 10) || 0;
    let oldNumber = this.state.counter;
    if (
      (min !== undefined && input < min) ||
      (max !== undefined && input > max)
    ) {
      this.setState({counter: 0}, () => {
        this.setState({isPressed: false, counter: oldNumber}, () => {
          onChangeText && onChangeText(this.state.counter);
          onChange && onChange(this.state.counter);
        });
      });
    } else {
      this.setState({counter: input}, () => {
        onChangeText && onChangeText(this.state.counter);
        onChange && onChange(this.state.counter);
      });
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  renderIncreaseCounter = () => {
    const {ImageComponent = Image, increaseButtonBackgroundColor = '#0b349a'} =
      this.props;
    const {isPressed} = this.state;

    return (
      <RNBounceable
        style={_increaseButtonStyle(isPressed, increaseButtonBackgroundColor)}
        bounceEffectIn={0.8}
        bounceVelocityIn={2}
        onPress={this.handleOnIncreasePress}>
        <ImageComponent
          style={styles.buttonImageStyle}
          source={isPressed ? plusIconWhite : plusIconBlack}
        />
      </RNBounceable>
    );
  };

  renderDecreaseCounter = () => {
    const {ImageComponent = Image, decreaseButtonBackgroundColor = '#0b349a'} =
      this.props;
    const {isPressed} = this.state;

    return (
      <RNBounceable
        style={_decreaseButtonStyle(isPressed, decreaseButtonBackgroundColor)}
        bounceEffectIn={0.8}
        bounceVelocityIn={2}
        onPress={this.handleOnDecreasePress}>
        <ImageComponent
          style={styles.buttonImageStyle}
          source={isPressed ? minusIconBlack : minusIconWhite}
        />
      </RNBounceable>
    );
  };

  renderTextInput = () => {
    const {counter} = this.state;
    return (
      <TextInput
        numberOfLines={1}
        keyboardType="numeric"
        style={styles.textInputStyle}
        onChangeText={this.handleOnChangeText}>
        {counter}
      </TextInput>
    );
  };

  render() {
    const {
      style,
      horizontal = false,
      backgroundColor = '#fff',
      width = horizontal ? 170 : undefined,
      borderRadius = 24,
    } = this.props;
    return (
      <View
        style={[
          _container(width, horizontal, backgroundColor, borderRadius),
          style,
        ]}>
        {this.renderIncreaseCounter()}
        {this.renderTextInput()}
        {this.renderDecreaseCounter()}
      </View>
    );
  }
}
