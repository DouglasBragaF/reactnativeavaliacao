import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StarIcon = ({ style }: { style: any }) => {
  return (
    <View style={[styles.iconContainer, style]}>
      <FontAwesome name="star" size={24} color="#4B0082" />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
  },
});

export default StarIcon;
