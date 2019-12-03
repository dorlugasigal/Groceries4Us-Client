import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './DevelopmentFlagStyle';

const DevelopmentFlag = () => {
  return (
    __DEV__ && (
      <View pointerEvents="box-none" style={styles.triangleCorner}>
        <Text style={styles.devText}>DEV</Text>
      </View>
    )
  );
};

export default DevelopmentFlag;
