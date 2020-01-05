import React, { useState, useEffect } from 'react';
import { AsyncStorage, Text, View, TouchableOpacity } from 'react-native';
import HttpService from '../../services/HttpService';
import { styles } from '../../styles/main';
import DevelopmentFlag from '../../components/DevelopmentFlag/DevelopmentFlag';
import DraggableFlatList from 'react-native-draggable-flatlist';

export function HomeScreen(props) {
  navigationOptions = {
    title: 'Welcome to the app!'
  };
  const [data, setData] = useState([
    { id: 0, title: 'list 1' },
    { id: 1, title: 'list 2' }
  ]);

  useEffect(
    () =>
      async function() {
        await HttpService.getUsersLists().then();
      },
    []
  );
  _showMoreApp = () => {
    props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={[styles.itemContainer, isActive ? styles.itemContainerActive : styles.itemContainerNotActive]}
        className={styles.itemContainer}
        onLongPress={drag}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 32
          }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <DevelopmentFlag></DevelopmentFlag>
      <Text style={styles.container}>My Lists:</Text>
      <View style={styles.listContainer}>
        <DraggableFlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.id}`}
          onDragEnd={({ data }) => setData(data)}
        />
      </View>
    </View>
  );
}
