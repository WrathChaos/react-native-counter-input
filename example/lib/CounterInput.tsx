import React, { Component } from "react";
import { TextInput, View, Image } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./CounterInput.style";
// ? White Assets
const plusIconWhite = require("./local-assets/plus-white.png");
const minusIconWhite = require("./local-assets/minus-white.png");
// ? Black Assets
const plusIconBlack = require("./local-assets/plus-black.png");
const minusIconBlack = require("./local-assets/minus-black.png");

export interface ICounterInputProps {
  ImageComponent?: any;
  horizontal?: boolean;
  initial?: number;
  onIncreasePress?: (counter: number) => void;
  onDecreasePress?: (counter: number) => void;
  onChangeText?: (counter: number) => void;
}

interface IState {
  counter: number;
  isPressed: boolean;
}

export default class CounterInput extends Component<
  ICounterInputProps,
  IState
> {
  constructor(props: ICounterInputProps) {
    super(props);
    this.state = {
      counter: props.initial || 0,
      isPressed: true, // if true: its for increase button, if false: its for decrease button
    };
  }

  renderIncreaseCounter = () => {
    const { ImageComponent = Image, onIncreasePress } = this.props;
    const { isPressed } = this.state;

    return (
      <RNBounceable
        style={{
          width: 40,
          height: 40,
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isPressed ? "#0b349a" : "transparent",
          shadowRadius: 3,
          shadowOpacity: isPressed ? 0.1 : 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
        bounceEffect={0.8}
        bounceFriction={2}
        onPress={() => {
          this.setState(
            { isPressed: true, counter: this.state.counter + 1 },
            () => onIncreasePress && onIncreasePress(this.state.counter),
          );
        }}
      >
        <ImageComponent
          source={isPressed ? plusIconWhite : plusIconBlack}
          style={{ height: 15, width: 15 }}
        />
      </RNBounceable>
    );
  };

  renderDecreaseCounter = () => {
    const { ImageComponent = Image, onDecreasePress } = this.props;
    const { isPressed } = this.state;

    return (
      <RNBounceable
        style={{
          width: 40,
          height: 40,
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isPressed ? "transparent" : "#0b349a",
          shadowRadius: 3,
          shadowOpacity: isPressed ? 0 : 0.1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
        bounceEffect={0.8}
        bounceFriction={2}
        onPress={() => {
          this.setState(
            { isPressed: false, counter: this.state.counter - 1 },
            () => onDecreasePress && onDecreasePress(this.state.counter),
          );
        }}
      >
        <ImageComponent
          source={isPressed ? minusIconBlack : minusIconWhite}
          style={{ height: 15, width: 15 }}
        />
      </RNBounceable>
    );
  };

  renderTextInput = () => {
    const { onChangeText } = this.props;
    const { counter } = this.state;
    return (
      <TextInput
        numberOfLines={1}
        keyboardType="numeric"
        style={{
          width: 40,
          height: 40,
          fontSize: 24,
          marginTop: 12,
          marginBottom: 8,
          alignSelf: "center",
          fontWeight: "bold",
          textAlign: "center",
        }}
        onChangeText={(text: string) =>
          this.setState(
            { counter: parseInt(text) },
            () => onChangeText && onChangeText(this.state.counter),
          )
        }
      >
        {counter}
      </TextInput>
    );
  };

  render() {
    const { horizontal } = this.props;
    return (
      <View
        style={{
          paddingTop: horizontal ? 0 : 7,
          paddingBottom: horizontal ? 0 : 7,
          paddingLeft: horizontal ? 0 : 9,
          paddingRight: horizontal ? 0 : 9,
          flexDirection: horizontal ? "row" : "column",
          width: horizontal ? 170 : undefined,
          borderRadius: 24,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "space-evenly",
          shadowRadius: 5,
          shadowOpacity: 0.3,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
      >
        {this.renderIncreaseCounter()}
        {this.renderTextInput()}
        {this.renderDecreaseCounter()}
      </View>
    );
  }
}
