import AsyncStorage from '@react-native-community/async-storage'
import api from '.'

export const login = async (email, password) => {
  try {
    const { data } = await api.post('auth/login', { email, password })

    if (data) {
      const { token, user } = data

      await AsyncStorage.multiSet([
        ['@LeoApp:token', token],
        ['@LeoApp:user', user],
      ])

      api.defaults.headers.authorization = `Bearer ${token}`

      return data
    }
  } catch (error) {
    console.log('error inside signin method', error.message)
  }
}

const logout = async () => {
  try {
    await AsyncStorage.multiRemove(['@LeoApp:token', '@LeoApp:user'])
  } catch (error) {
    console.log('error inside signin method', error.message)
  }
}
