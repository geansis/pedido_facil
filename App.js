import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { Button, Header, SearchBar } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Pedido Certo', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <View style={styles.container_body}>
      <SearchBar
      lightTheme
      // onChangeText={someMethod}
      // onClearText={someMethod}
      icon={{ type: 'font-awesome', name: 'search' }}
      placeholder='Type Here...' />
        <Button style={styles.button_home}
          raised
          icon={{name: 'face'}}
          title='Cliente' />
          <Button style={styles.button_home}
          raised
          icon={{name: 'build'}}
          title='Produto' />
          <Button style={styles.button_home}
          raised
          icon={{name: 'shop'}}
          title='Pedido' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  container_body:{ 
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_home:{
    marginTop:10,
  },
  color_title:{
    color: 'white',
  }

})

AppRegistry.registerComponent('App', () => App)