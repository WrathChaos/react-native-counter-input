import React from "react";
import { SafeAreaView, View, Image, Text, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CounterInput from "./build/dist/CounterInput";

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#1646af", "#0b2d80"]}
          style={{
            height: 450,
            width: "100%",
            borderTopLeftRadius: 48,
            borderBottomLeftRadius: 48,
          }}
        >
          <View style={{ margin: 32 }}>
            <Text style={{ fontSize: 40, fontWeight: "bold", color: "#fff" }}>
              Beats
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "300",
                color: "#fff",
                opacity: 0.7,
              }}
            >
              Warriors Royale Blue
            </Text>
            <Image
              resizeMode="contain"
              style={{ height: 300, width: 300, right: 40, top: 20 }}
              source={require("./assets/beats-warriors-royal-blue.png")}
            />
          </View>
          <View
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ marginLeft: "auto", marginRight: 24 }}>
              <CounterInput />
            </View>
          </View>
        </LinearGradient>
        {/* <CounterInput horizontal /> */}
      </SafeAreaView>
    </>
  );
};

export default App;
