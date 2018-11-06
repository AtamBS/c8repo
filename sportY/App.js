import React from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';
import firebase from 'firebase';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

componentWillMount() {
  firebase.initializeApp({
    apiKey: "AIzaSyBlOmblpvHJewEQhobxLrttvcTT-qQybH4",
    authDomain: "sporty-78a1a.firebaseapp.com",
    databaseURL: "https://sporty-78a1a.firebaseio.com",
    projectId: "sporty-78a1a",
    storageBucket: "sporty-78a1a.appspot.com",
    messagingSenderId: "393222333730"
  });

  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
