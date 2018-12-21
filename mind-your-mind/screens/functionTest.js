import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class functionTest extends React.Component {
  render(){
    return(
    <View>
      <Image source={
        require('../assets/images/robot-dev.png')
      } />
      <Text>Welcome to the jungle!
      </Text>
    </View>
  });
}
