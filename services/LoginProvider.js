import AsyncStorage from '@react-native-community/async-storage'
import { createContext, useContext, useEffect, useState } from 'react'
import api from './api'

const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profile, setProfile] = useState({})
  const [loginPending, setLoginPending] = useState(false)

  const fetchUser = async () => {
    setLoginPending(true)
    const token = await AsyncStorage.getItem('@LeoApp:token')
    const user = await AsyncStorage.getItem('@LeoApp:user')

    if (token !== null) {
      const res = await api.get(`user/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (res) {
        setProfile(res)
        setIsLoggedIn(true)
      } else {
        setProfile({})
        setIsLoggedIn(false)
      }
      setLoginPending(false)
    } else {
      setProfile({})
      setIsLoggedIn(false)
      setLoginPending(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profile,
        setProfile,
        loginPending,
        setLoginPending,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => useContext(LoginContext)
export default LoginProvider
