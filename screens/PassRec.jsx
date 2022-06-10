import React, { useState } from 'react'
import { FONTS, SIZES, COLORS, styles } from '../constants'
import { View, TextInput, Text, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { MainRectButton, FocusedStatusBar } from '../components'

const SignUp = () => {
  
  const [email, setEmail] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container}>

      <View style={ styles.containerLogo }>
        <Image style={styles.logo} source= {require('../assets/logo_leo.png')} />

      </View>

      <View style={ styles.container }>
        <FocusedStatusBar style="auto" />

        <Text style={ styles.label}>Recuperação de Senha</Text>
        
        <Text style={{ 
          fontFamily: FONTS.regular,
          fontSize: SIZES.font,
          marginBottom: 20,
         }}>Digite o e-mail que você utilizou no cadastro da conta para receber o link de redefinição da sua senha.</Text>

        <TextInput  
          name="inputEmail" 
          placeholder='E-mail' 
          autoCorrect={false}
          onChange={text=>setEmail(text)} 
          style={ styles.textInput } 
        />

        <TouchableOpacity 
            style={{
              width: 280,
              backgroundColor: COLORS.green,
              borderRadius: SIZES.large,
              padding: SIZES.large,
            }}
        ><Text style={styles.confirmButtom}>Redefinir senha</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.loginText}>Não sabe por que de estar aqui? Clique para voltar!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUp