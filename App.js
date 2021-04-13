import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StockScreen from "./screens/StockScreen"
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'

export default function App() {
  return (
    <>
    <StatusBar style="dark" hidden={true}/>
    <SafeAreaView style={{flex:1, backgroundColor: "white"}}>
    <ScrollView style={styles.container}>
      <StockScreen />
    </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
