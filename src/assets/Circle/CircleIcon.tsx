import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CircleIcon = ({style}: {style: any}) => {
  return (
    <View style={[styles.iconContainer, style]}>
      <FontAwesome name="circle" size={24} color="#4B0082" style={styles.circleIcon}/>
    </View>
  );
};


const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
  },
  circleIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  }
});


export default CircleIcon;