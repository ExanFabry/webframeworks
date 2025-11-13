import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [backgroundColorOff, setBackgroundColorOff] = useState("white");
  const [backgroundColorOn, setBackgroundColorOn] = useState("black");

    return (
        <View style={isEnabled ? {flexDirection: "column", flex: 1, backgroundColor: backgroundColorOn} : {flexDirection: "column", flex: 1, backgroundColor: backgroundColorOff}}>
            <Switch
                onValueChange={() => setIsEnabled(previousState => !previousState)}
                value={isEnabled}
            />
            <TextInput onChangeText={setBackgroundColorOff}/>
            <TextInput onChangeText={setBackgroundColorOn}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
