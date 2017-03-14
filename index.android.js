

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {  AppRegistry } from 'react-native';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button , Body, Footer, Icon, Title} from 'native-base';
import PagetwoScreen from './PagetwoScreen.js';
import PagethreeScreen from './PagethreeScreen.js';
// import ItemScreen from './ItemScreen.js';
const images = {
  background: require('./BG.png'),
  launch: require('./logo.png')

}
const styles = {
imageBg: {
  flex: 1,
  width: null,
  height: null,
}

}

class App extends React.Component {
  static navigationOptions = {
  //   title: 'NaturesBowl',
  header: ({ state, setParams }) => ({
    visible: false
  })
  };
  render () {
    const { navigate } = this.props.navigation;

    return (


      <ScrollView>
      <Container>

        <Image source={images.background} style={styles.imageBg}>

                   <Content>
                     <Body>
                       <Image source={images.launch} style={{marginTop: 50, height: 200, width: 250, alignItems: 'center', justifyContent: 'center', borderRadius: 50, }} />
                       <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20, color: 'white', fontFamily: 'italic', borderRadius: 50 }}> Excellence Beyond Expectation</Text>
                     </Body>

                       <Button primary onPress={() => navigate('Pagetwo')} title="Register" full="submit" style={{backgroundColor: '#f00', marginLeft: 10, marginRight: 10, marginTop: 50, borderRadius: 10, alignItems: 'center' }}>
                         <Text style={{fontWeight: 'bold', color: '#fff'}}>Click to know more!</Text>
                       </Button>
                   </Content>

                 </Image>

               </Container>
                        </ScrollView>
    )
  }
};

const Nav = StackNavigator({
  Home: {screen: App},
  Pagetwo: { screen: PagetwoScreen },
  Pagethree: { screen: PagethreeScreen }


});
AppRegistry.registerComponent('kit', () => Nav);
