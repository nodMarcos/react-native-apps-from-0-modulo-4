import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Conversor from './src/Conversor';


export default class App extends Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Conversor coinA="USD" coinB="BRL" />
        <Conversor coinA="EUR" coinB="BRL" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
