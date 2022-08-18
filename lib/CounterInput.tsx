import * as React from "react";
import { TextInput, View, Image, StyleProp, ViewStyle } from "react-native";
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
    const { onChange, onIncreasePress,max } = this.props;
    if(this.state.counter < max || max == undefined){
      this.setState({ isPressed: true, counter: this.state.counter + 1 }, () => {
        onIncreasePress && onIncreasePress(this.state.counter);
        onChange && onChange(this.state.counter);
      });
    }
  };

  handleOnDecreasePress = () => {
    const { onChange, onDecreasePress,min } = this.props;
      if(this.state.counter > min || min == undefined){
          this.setState({ isPressed: false, counter: this.state.counter - 1 }, () => {
              onDecreasePress && onDecreasePress(this.state.counter);
              onChange && onChange(this.state.counter);
          });
      }
  };

  handleOnChangeText = (e: nativeEvent) => {
    const { onChange, onChangeText,min,max } = this.props;
    let _number = parseInt(e.nativeEvent.text) || 0;
    let oldNumber = this.state.counter;
    console.log(min,max);
    if((_number < min && min != undefined) || (_number > max  && max != undefined)){
        this.setState({counter: null }, () => {
            this.setState({isPressed: false, counter:  oldNumber},()=>{
                onChangeText && onChangeText(this.state.counter);
                onChange && onChange(this.state.counter);
            });
        });
    }else{
        this.setState({counter: _number }, () => {
            onChangeText && onChangeText(this.state.counter);
            onChange && onChange(this.state.counter);
        });

    }
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
        onSubmitEditing={(e: nativeEvent) => this.handleOnChangeText(e)}
      >
        {counter}
      </TextInput>
    );
  };

  render() {
    const {
      style,
      horizontal = false,
      backgroundColor = "#fff",
      width = horizontal ? 170 : undefined,
      borderRadius = 24,
    } = this.props;
    return (
      <View
        style={[
          _container(width, horizontal, backgroundColor, borderRadius),
          style,
        ]}
      >
        {this.renderDecreaseCounter()}
        {this.renderTextInput()}
        {this.renderIncreaseCounter()}
      </View>
    );
  }
}
