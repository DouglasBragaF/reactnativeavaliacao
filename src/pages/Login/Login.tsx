import { TextInput, View } from "react-native"
import { styles } from "../Hello/styles"

export const Login = ({ navigation }: { navigation: any }) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.imageContainer }></View>
        <Image
          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIgAeuQ9quH8MdUitP6Xd5_bxFesYfFLbLmmBbUY_7FS3UPZ0n' }}
          style={ styles.image }
        />
      </View>
      <Text style={ styles.title }>Login</Text>
      <Text style={ styles.label }>Name</Text>
      <TextInput style={ styles.input } />
      
  )