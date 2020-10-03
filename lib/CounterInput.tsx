import * as React from "react";
import { TextInput, View, Image } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, {
  _container,
  _increaseButtonStyle,
  _decreaseButtonStyle,
} from "./CounterInput.style";
// ? White Assets
const plusIconWhite = require("./local-assets/plus-white.png");
const minusIconWhite = require("./local-assets/minus-white.png");
// ? Black Assets
const plusIconBlack = require("./local-assets/plus-black.png");
const minusIconBlack = require("./local-assets/minus-black.png");

export interface ICounterInputProps {
  initial?: number;
  ImageComponent?: any;
  horizontal?: boolean;
  backgroundColor?: string;
  increaseButtonBackgroundColor?: string;
  decreaseButtonBackgroundColor?: string;
  onIncreasePress?: (counter: number) => void;
  onDecreasePress?: (counter: number) => void;
  onChangeText?: (counter: number) => void;
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
    const { onChange, onIncreasePress } = this.props;
    this.setState({ isPressed: true, counter: this.state.counter + 1 }, () => {
      onIncreasePress && onIncreasePress(this.state.counter);
      onChange && onChange(this.state.counter);
    });
  };

  handleOnDecreasePress = () => {
    const { onChange, onDecreasePress } = this.props;
    this.setState({ isPressed: false, counter: this.state.counter - 1 }, () => {
      onDecreasePress && onDecreasePress(this.state.counter);
      onChange && onChange(this.state.counter);
    });
  };

  handleOnChangeText = (text: string) => {
    const { onChange, onChangeText } = this.props;
    this.setState({ counter: parseInt(text) }, () => {
      onChangeText && onChangeText(this.state.counter);
      onChange && onChange(this.state.counter);
    });
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  renderIncreaseCounter = () => {
    const {
      ImageComponent = Image,
      increaseButtonBackgroundColor = "#0b349a",
    } = this.props;
    const { isPressed } = this.state;

    return (
      <RNBounceable
        style={_increaseButtonStyle(isPressed, increaseButtonBackgroundColor)}
        bounceEffect={0.8}
        bounceFriction={2}
        onPress={this.handleOnIncreasePress}
      >
        <ImageComponent
          style={styles.buttonImageStyle}
          source={isPressed ? plusIconWhite : plusIconBlack}
        />
      </RNBounceable>
    );
  };

  renderDecreaseCounter = () => {
    const {
      ImageComponent = Image,
      decreaseButtonBackgroundColor = "#0b349a",
    } = this.props;
    const { isPressed } = this.state;

    return (
      <RNBounceable
        style={_decreaseButtonStyle(isPressed, decreaseButtonBackgroundColor)}
        bounceEffect={0.8}
        bounceFriction={2}
        onPress={this.handleOnDecreasePress}
      >
        <ImageComponent
          style={styles.buttonImageStyle}
          source={isPressed ? minusIconBlack : minusIconWhite}
        />
      </RNBounceable>
    );
  };

  renderTextInput = () => {
    const { counter } = this.state;
    return (
      <TextInput
        numberOfLines={1}
        keyboardType="numeric"
        style={styles.textInputStyle}
        onChangeText={(text: string) => this.handleOnChangeText(text)}
      >
        {counter}
      </TextInput>
    );
  };

  render() {
    const { horizontal = false, backgroundColor = "#fff" } = this.props;
    return (
      <View style={_container(horizontal, backgroundColor)}>
        {this.renderIncreaseCounter()}
        {this.renderTextInput()}
        {this.renderDecreaseCounter()}
      </View>
    );
  }
}
