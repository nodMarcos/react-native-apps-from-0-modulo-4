import axios from "axios";
import { Component } from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import api from '../services/api'
//

export default class Conversor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coinA: props.coinA,
      coinB: props.coinB,
      coinB_value: 0,
      converted_value: 0
    }

    this.convert = this.convert.bind(this)
  }

  async convert() {
    let from_to = this.state.coinA + '_' + this.state.coinB;
    const response = await axios.get(`https://free.currencyconverterapi.com/api/v5/convert?q=${from_to}&compact=ultra&apiKey=12bf119d69ea058e0f56`)

    let cotation = response.data[from_to];

    let result = (cotation * parseFloat(this.state.coinB_value))

    this.setState({
      converted_value: result.toFixed(2)
    })

    Keyboard.dismiss()
  }

  render() {
    const {coinA, coinB} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{coinA} to {coinB}</Text>
        <TextInput 
          placeholder="Value to convert" 
          style={styles.areaInput} 
          onChangeText={(coinB_value) => {
            this.setState({coinB_value})
          }}
          keyboardType="numeric" 
        />

        <TouchableOpacity style={styles.areaButton} onPress={this.convert}>
          <Text style={styles.textButton}>Convert</Text>
        </TouchableOpacity>

        <Text style={styles.convertedValue}>
          {this.state.converted_value === 0 ? '' : this.state.converted_value}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  areaInput: {
    width: 280,
    height: 45,
    backgroundColor: '#ccc',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 5,
  },
  areaButton: {
    width: 150,
    height: 45, 
    backgroundColor: '#ff0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  convertedValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  }
})