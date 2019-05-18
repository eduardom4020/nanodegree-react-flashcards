import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonBase from './components/Buttons/ButtonBase';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonBase />
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
