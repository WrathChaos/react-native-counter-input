import React, { Component } from "react";
import { TextInput, View, Image } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./CounterInput.style";

const plusIcon = require("./local-assets/plus.png");
const minusIcon = require("./local-assets/minus.png");

export interface ICounterInputProps {
  ImageComponent?: any;
  onIncreasePress?: (counter: number) => void;
  onChangeText?: (counter: number) => void;
}

interface IState {
  counter: number;
}

export default class CounterInput extends Component<
  ICounterInputProps,
  IState
> {
  constructor(props: ICounterInputProps) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  renderIncreaseCounter = () => {
    const { ImageComponent = Image, onIncreasePress } = this.props;

    return (
      <RNBounceable
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b349a",
        }}
        onPress={() => {
          this.setState(
            { counter: this.state.counter + 1 },
            () => onIncreasePress && onIncreasePress(this.state.counter),
          );
        }}
      >
        <ImageComponent source={plusIcon} style={{ height: 20, width: 20 }} />
      </RNBounceable>
    );
  };

  render() {
    const { onChangeText } = this.props;
    const { counter } = this.state;
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {this.renderIncreaseCounter()}
        <View style={{ marginTop: 16 }}>
          <TextInput
            numberOfLines={1}
            keyboardType="numeric"
            style={{ fontSize: 18, fontWeight: "bold" }}
            onChangeText={(text: string) =>
              this.setState(
                { counter: parseInt(text) },
                () => onChangeText && onChangeText(this.state.counter),
              )
            }
          >
            {counter}
          </TextInput>
        </View>
      </View>
    );
  }
}
