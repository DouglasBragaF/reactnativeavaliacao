import { Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {styles}  from "./styles";
import { Button } from "@/src/components/Button/Button";

export const Hello = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIgAeuQ9quH8MdUitP6Xd5_bxFesYfFLbLmmBbUY_7FS3UPZ0n' }}
          style={styles.image}
        />
        
      </View>

      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>Welcome To Little Drop, where you manage your daily tasks</Text>

      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
        textStyle={styles.buttonText}
      />

      
      <Button
        title="Sign up"
        onPress={() => navigation.navigate('Signup')}
        style={styles.outlineButton}
        textStyle={styles.outlineButtonText}
      />

      <View style={styles.socialContainer}>

        <Text style={styles.socialText}>Sign up using</Text>

        <View style={styles.socialIcons}>
          <Image source={{ uri: 'https://img.icons8.com/fluency/48/000000/facebook-new.png' }} style={styles.icon} />
          <Image source={{ uri: 'https://img.icons8.com/fluency/48/000000/google-logo.png' }} style={styles.icon} />
          <Image source={{ uri: 'https://img.icons8.com/fluency/48/000000/linkedin.png' }} style={styles.icon} />
        </View>
    
      </View>
    </View>
  )};