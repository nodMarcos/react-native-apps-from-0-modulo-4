import {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Movies extends Component {
  render() {
    const {nome, foto} = this.props.data;

    return(
      <View>
        <View style={styles.card}>
          <Text style={styles.title}>{nome}</Text>
          <Image source={{url:foto}} style={styles.cape} />
          <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => alert(nome)}>READ MORE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
  },
  title: {
    fontSize: 18,
    padding: 15
  },
  cape: {
    height: 250,
    zIndex: 2
  },
  buttonArea: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9
  },
  button: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,

  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  }
  


})