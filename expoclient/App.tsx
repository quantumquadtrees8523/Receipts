import React, { useEffect } from 'react';
import { StyleSheet, Keyboard, View } from 'react-native';
import { DigtalReciept } from './src/components/DigitalReceipt';

export default function App() {

  return (
    <View style={styles.container} onTouchStart={() => {Keyboard.dismiss()}}>
      <DigtalReciept categoryTags={
        [
          "select",
          "fun",
          "random thing i bought",
          "groceries",
          "i needed to buy this",
          "takeout",
          "alcohol",
          "uber",
          "date",
        ]
      }
    />
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
