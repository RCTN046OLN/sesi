/* eslint-disable */
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("hallo console");
    console.warn("hello warning")
    alert(`Ini email: ${email}. dan ini password: ${password}`)
  }
  
  return(
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput 
        value={email} 
        placeholder="Email edited" 
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput 
        value={password} 
        placeholder="Password" 
        style={styles.textInput}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    borderWidth: 1,
    width: '80%',
    height: 30,
    marginBottom: 10
  }
})

export default Login;