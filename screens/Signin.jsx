import React, { useState } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { FocusedStatusBar } from '../components'
import { LoginButton } from '../components/Button'
import { styles } from '../constants'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../assets/logo_leo.png')} />
      </View>

      <View style={styles.container}>
        <FocusedStatusBar style='auto' />

        <Text style={styles.label}>Acesse sua conta</Text>

        <TextInput
          name='inputEmail'
          placeholder='E-mail'
          autoCorrect={false}
          onChange={text => setEmail(text)}
          style={styles.textInput}
        />

        <TextInput
          secureTextEntry={true}
          name='inputPassword'
          placeholder='Senha'
          autoCorrect={false}
          onChange={text => setPassword(text)}
          style={styles.textInput}
        />

        <LoginButton onPress={() => login()} />

        <TouchableOpacity>
          <Text style={styles.loginText}>
            Não tem uma conta? Clique para criar!
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Signin
