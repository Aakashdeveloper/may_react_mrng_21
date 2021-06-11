import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Switch,ImageBackground } from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

function App() {
  const [OutputText, setText] = useState('Test Native App');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
       <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
      <Text>{OutputText}</Text>
      <Button title="Click me" onPress={()=>{setText('Text Change')}}/>
      <Button title="Revert me" onPress={()=>{setText('Test Native App')}}/>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default App;
