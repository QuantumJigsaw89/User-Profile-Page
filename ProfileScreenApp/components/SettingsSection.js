// components/SettingsSection.js
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const SettingsSection = ({ title, items, isDarkMode }) => (
  <View style={styles.section}>
    <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : null]}>{title}</Text>
    {items.map((item, index) => (
      <View key={index} style={styles.item}>
        <Text style={[styles.itemText, isDarkMode ? styles.darkText : null]}>{item.title}</Text>
        {item.isSwitch && (
          <Switch value={item.switchValue} onValueChange={item.onSwitchChange} />
        )}
      </View>
    ))}
  </View>
);

export default SettingsSection;
