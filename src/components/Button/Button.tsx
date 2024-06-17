import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export const Button = ({onPress, title, style, textStyle}: {onPress: () => void, title: string, style?: object, textStyle?: object}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};