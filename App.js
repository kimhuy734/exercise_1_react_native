import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, ScrollView } from 'react-native'
import { Signin } from './components/signin';
import { Signup } from './components/signup';

const App = () => {
  return(
    <ScrollView>
      {/* <Signin/> */}
      <Signup/>
    </ScrollView>
  );
};

export default App;