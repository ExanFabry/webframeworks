import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import {View, StyleSheet} from "react-native";
import Constants from 'expo-constants';
import { HexColor } from "rainbow-colors-array-ts";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "column", flex: 1, minHeight: 70}}>
        {Rainbow.map((value: HexColor, index: number) => 
          <View key={index} style={{width: "100%", backgroundColor: value.hex, minHeight: 10}}/> 
        )}
      </View> 
      <View style={{flex: 1, flexDirection: "column", justifyContent: "space-around", minHeight: "50%"}}>
        <View style={{flexDirection: "row", flex: 1}}>
          {Rainbow.map((value: HexColor, index: number) => 
            <View key={index} style={{backgroundColor: value.hex, width: 10, marginLeft: 20}}/> 
          )}
        </View> 
        <View style={{flex: 2, flexDirection: "column", paddingLeft: "80%"}}>
          {Rainbow.map((value: HexColor, index: number) => 
            <View key={index} style={{ width: 50, height: 50, backgroundColor: value.hex, marginBottom: 50 }} />
          )}
        </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
  }
});

const Rainbow = rainbow(7);
[
    { hex: "#f38020" },
    { hex: "#9fe303" },
    { hex: "#33fc44" },
    { hex: "#01b7b3" },
    { hex: "#2f49fb" },
    { hex: "#9a04e6" },
    { hex: "#f11d85" }
]