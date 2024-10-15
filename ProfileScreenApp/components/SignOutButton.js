// components/SignOutButton.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const SignOutButton = ({ isDarkMode }) => (
  <View style={styles.buttonContainer}>
    <Button title="Sign Out" onPress={() => {}} color={isDarkMode ? '#888' : '#ff6347'} />
  </View>
);

export default SignOutButton;
