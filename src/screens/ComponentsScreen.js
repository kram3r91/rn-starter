import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const ComponentsScreen = () => {
  const name = 'Claudiu';
  return (
    <View>
      <CustomText>Getting started with React Native!</CustomText>
      <SecondText>My name is {name}</SecondText>
    </View>
  );
};

const CustomText = styled.Text`
  font-size: 45px;
`
const SecondText = styled.Text`
  font-size: 20px;
`
export default ComponentsScreen;
