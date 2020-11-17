import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 35 },
    { name: 'Friend #3', age: 67 },
    { name: 'Friend #4', age: 78 },
    { name: 'Friend #5', age: 70 },
    { name: 'Friend #6', age: 25 },
    { name: 'Friend #7', age: 21 },
    { name: 'Friend #8', age: 28 },
    { name: 'Friend #9', age: 41 }
  ]

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <CustomText>
            { item.name } - Age { item.age }
          </CustomText>
        )
      }}
    />
  );
};

const CustomText = styled.Text`
  margin-vertical: 10px;
`
export default ListScreen;
