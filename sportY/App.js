import React from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';
import firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
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

  render() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.container}>
            <Home/>
          </View>
        );
      case false:
        return (
          <View style={styles.container}>
          <LoginForm />
          </View>
        );
      default:
        return <ActivityIndicator size="large" />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
