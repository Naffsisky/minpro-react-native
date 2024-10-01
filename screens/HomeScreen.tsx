import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import tw from 'twrnc';

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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
        <View>
          <Button
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress={() => navigation.navigate('Detail')}
            title="Get Started"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {},
  scrollView: {},
  title: {},
  subtitle: {},
};
