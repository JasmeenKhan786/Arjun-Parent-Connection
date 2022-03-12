import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';  
import 'react-native-gesture-handler';

import MyStack from './navigation'; 
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Arial": require("./arial.ttf"),
};

export default class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() { 
    this._loadFontsAsync();
  }



  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <NavigationContainer>
          <MyStack/>
        </NavigationContainer>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
