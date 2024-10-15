// components/ProfileHeader.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from '../styles/styles';

const ProfileHeader = ({ name, joinedDate, isDarkMode }) => (
  <View style={styles.header}>
    <Avatar
      rounded
      size="large"
      source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} // Replace with actual image URI
    />
    <Text style={[styles.name, isDarkMode ? styles.darkText : null]}>{name}</Text>
    <Text style={[styles.joined, isDarkMode ? styles.darkText : null]}>Joined {joinedDate}</Text>
  </View>
);

export default ProfileHeader;
