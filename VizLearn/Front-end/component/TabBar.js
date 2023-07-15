import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabBar = () => {
  const tabs = [
    { icon: 'home-outline', label: 'Home' },
    { icon: 'search-outline', label: 'Search' },
    { icon: 'md-notifications-outline', label: 'Add' },
    { icon: 'person-outline', label: 'Profile' },
  ];
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity key={index} style={styles.tab}>
          <Ionicons name={tab.icon} size={24} color="black" />
          <Text style={styles.label}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  label: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default TabBar;
