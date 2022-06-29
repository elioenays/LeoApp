import React, { useState } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { FocusedStatusBar, LoginButton } from '../components'
import { styles } from '../constants'
import { login } from '../services/api/user'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignIn() {
    const data = await login(email, password)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../assets/logo_leo.png')} />
      </View>

      <View style={styles.container}>
        <FocusedStatusBar style='auto' />

        <Text style={styles.label}>Acesse sua conta</Text>

        <TextInput
          value={email}
          placeholder='E-mail'
          keyboardType='email-address'
          autoCorrect={false}
          style={styles.textInput}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          secureTextEntry={true}
          value={password}
          placeholder='Senha'
          returnKeyType='send'
          autoCorrect={false}
          style={styles.textInput}
          onChangeText={text => setPassword(text)}
        />

        <LoginButton handlePress={handleSignIn} />

        <TouchableOpacity>
          <Text style={styles.loginText}>
            Não tem uma conta? Clique para criar!
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignIn
