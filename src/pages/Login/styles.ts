// src/screens/styles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Mesma cor de fundo usada no Hello
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    height: height * 0.35,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333', // Mesma cor usada no Hello
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 30,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333333', // Mantendo a cor consistente
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    borderColor: '#888888', // Adicionando borda para consistência visual
    borderWidth: 1,
    fontSize: 16,
    color: '#333333',
  },
  forgotPasswordText: {
    color: '#888888',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'flex-end', // Centraliza o botão horizontalmente
    marginTop: 10,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 25,
    width: '40%',
    alignItems: 'center',
    marginVertical: 0,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
