import { Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {styles}  from "./styles";
import { Button } from "@/src/components/Button/Button";
import { FontAwesome } from '@expo/vector-icons';
import StarIcon  from "@/src/assets/StarIcon/StarIcon";
import CircleIcon  from "@/src/assets/Circle/CircleIcon";

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

        <StarIcon style={{ top: -15, left: -20 }} />
        <StarIcon style={{ top: 10, right: -20 }} />
        <StarIcon style={{ bottom: -20, right: 20 }} />
        <CircleIcon style={{ bottom: 60, left: -60 }} />
        
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
        <View style={[styles.icon, styles.facebookIcon]}>
            <FontAwesome name="facebook" size={24} color="#ffffff" />
          </View>
          <View style={[styles.icon, styles.googleIcon]}>
            <FontAwesome name="google" size={24} color="#ffffff" />
          </View>
          <View style={[styles.icon, styles.linkedinIcon]}>
            <FontAwesome name="linkedin" size={24} color="#ffffff" />
          </View>
        </View>
    
      </View>
    </View>
  )};