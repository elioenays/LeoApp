import React, { useState } from 'react'
import { styles } from '../constants'
import { View, TextInput, Text, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { MainRectButton, FocusedStatusBar } from '../components'

const SignUp = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cadastro = () => {
    //alert(name);
    //alert(email);
    //alert(password);
    // Realizar simulação e chamar no back-end.
  }

  return (
    <KeyboardAvoidingView style={styles.container}>

      <View style={ styles.containerLogo }>
        <Image style={styles.logo} source= {require('../assets/logo_leo.png')} />

      </View>

      <View style={ styles.container }>
        <FocusedStatusBar style="auto" />

        <Text style={ styles.label }>Crie sua conta</Text>
        <TextInput 
          name="inputName" 
          placeholder='Nome' 
          onChange={text=>setName(text)} 
          style={ styles.textInput } 
        />

        <TextInput  
          name="inputEmail" 
          placeholder='E-mail' 
          autoCorrect={false}
          onChange={text=>setEmail(text)} 
          style={ styles.textInput } 
        />

        <TextInput 
          secureTextEntry={true} 
          name="inputPassword" 
          placeholder='Senha' 
          autoCorrect={false}
          onChange={text=>setPassword(text)} 
          style={ styles.textInput }
        />

        <MainRectButton onPress={()=>cadastro()} />

        <TouchableOpacity>
          <Text style={styles.loginText}>
            Já tem uma conta? Clique para acessar!
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUp