import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ticket = ({ title, description, date }) => {
  return (
    <View style={styles.ticketContainer}>
      <Text style={styles.title}>Discount Vocher</Text>
      <Text style={styles.description}>English Course</Text>
      <Text style={styles.description}>$50</Text>
      <Text style={styles.date}>Valid until: Aug 10</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    marginBottom: 8,
    alignSelf: 'left'
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});

export default Ticket;
