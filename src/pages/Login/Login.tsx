import { TextInput, View, Image, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { Button } from "@/src/components/Button/Button";

export const Login = ({ navigation }: { navigation: any }) => {
  return (
    <View style={ styles.container }>

      <View style={ styles.imageContainer }>
        <Image
          source={{ uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTpdSWt59bPEzpuYnB_UVmpB-nbwKySeBhW1515MPoJOfXJ5CPs' }}
          style={ styles.image }
        />
      </View>
      <Text style={ styles.title }>Login</Text>

      <View style={styles.inputContainer}>
        
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={ styles.label }>Email</Text>
          <TextInput style={ styles.input } />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={ styles.label }>Password</Text>
          <TextInput style={ styles.input } />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Button
            title="Sign up"
            onPress={() => navigation.navigate('Signup')}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>

      </View>
      
    </View>
  );
};