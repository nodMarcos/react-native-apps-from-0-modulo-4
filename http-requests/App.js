import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import api from './src/services/api';
import Movies from './src/Movies'
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true
    }
  }
  async componentDidMount() {
    const response = await axios.get('https://sujeitoprogramador.com/r-api/?api=filmes')

    this.setState({ 
      movies: response.data,
      loading: false
    })
    
  }
  
  render() {

    if(this.state.loading) {
      return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator color="#09A6FF" size={40}/>
        </View>
      )

    }
    else {
      return (
        <View style={styles.container}>
          <FlatList 
            data={this.state.movies} 
            keyExtractor={item => item.id.toString()} 
            renderItem={({item}) => <Movies data={item} />}
          />
        </View>
      );
    }

   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
