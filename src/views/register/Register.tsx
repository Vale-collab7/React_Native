import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid } from 'react-native';
import { RoundeButton } from '../../components/RoundeButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import { useNavigation } from '@react-navigation/native';

export const RegisterScreen = () => {

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/img/chef.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/img/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMÁGEN</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>REGISTRARSE</Text>
        <View style={styles.formInput}>
          <Image style={styles.formIcon}
            source={require('../../../assets/img/user.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Nombres'
            keyboardType='default'
          />
        </View>
        <View style={styles.formInput}>
          <Image style={styles.formIcon}
            source={require('../../../assets/img/my_user.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Apellidos'
            keyboardType='default'
          />
        </View>
        <View style={styles.formInput}>
          <Image style={styles.formIcon}
            source={require('../../../assets/img/email.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Correo electrónico'
            keyboardType='email-address'
          />
        </View>
        <View style={styles.formInput}>
          <Image style={styles.formIcon}
            source={require('../../../assets/img/phone.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Teléfono'
            keyboardType='numeric'
          />
        </View>
        <View style={styles.formInput}>
          <Image style={styles.formIcon}
            source={require('../../../assets/img/password.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry={true}
          />
        </View>
        <View style={styles.formInput}>
          <Image style={styles.formIcon}
            source={require('../../../assets/img/confirm_password.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Confirmar Contraseña'
            keyboardType='default'
            secureTextEntry={true}
            />
            </View>
        <View style={{ marginTop: 10 }}>
          <RoundeButton text='CONFIRMAR' onPress={() => ToastAndroid.show('¡HOLA!', ToastAndroid.SHORT)} />
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: '15%',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    marginLeft: 15,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});   
