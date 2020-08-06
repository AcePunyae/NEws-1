import * as React from 'react';
import { View } from 'react-native';
import Joke from './screens/Joke';
import News from './screens/News';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
  
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  News: News,
  Joke: Joke,
});

