import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet, Text} from 'react-native';
import tw from 'twrnc';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={tw`border-2 border-black py-10`}>
          <View style={tw`flex-1 justify-center items-center`}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>To</Text>
            <Text style={styles.title}>KisahKu</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E400',
  },
  title: {
    fontFamily: 'SUSE-Bold',
    fontSize: 40,
    color: '#1f2937',
    letterSpacing: 5,
  },
  subtitle: {
    fontFamily: 'SUSE-Bold',
    fontSize: 30,
    color: '#1f2937',
    letterSpacing: 5,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
