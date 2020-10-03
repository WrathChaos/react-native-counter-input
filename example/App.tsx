import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import CounterInput from "./lib/CounterInput";

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#0f39a1",
        }}
      >
        <CounterInput />
        <CounterInput horizontal />
      </SafeAreaView>
    </>
  );
};

export default App;
