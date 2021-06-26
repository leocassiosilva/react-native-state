import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  
  const [count, setCount] = useState(0);
  
  function aumentar(){
    setCount(count+1)
  }

  function diminuir(){
    setCount(count-1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.textTitle}>Contador {count} </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={aumentar}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={diminuir}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
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

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10, 
    height:30,
    width:30,
    margin:20
  },

  countContainer: {
    alignItems: "center",
    padding: 10
  },
});
