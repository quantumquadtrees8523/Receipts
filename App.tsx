import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DigtalReciept } from './src/components/DigitalReceipt';

export default function App() {

  return (
    <View style={styles.container}>
      <DigtalReciept categoryTags={['d', 'a', 'c', 'b', 'e']}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
