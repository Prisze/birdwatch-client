import router from '@/router'
import { firebaseApp } from '@/composables/useFirebase'

import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as firebaseAuth } from '@vueuse/firebase/useAuth'

//import useAPI from '@/composables/useAPI'
//const { api } = useAPI()

const auth = getAuth(firebaseApp)

const { isAuthenticated, user } = firebaseAuth(auth)

export const useAuth = () => {
  const login = async (username, password) => {
    await signInWithEmailAndPassword(auth, username, password)
    if (user) {
      //user.value.getIdToken().then(token => {
      //  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      //});
    }
    return isAuthenticated.value
  }

  const refresh = async () => {
    await user.value.reload()
  }

  const logout = async () => {
    await signOut(auth)
    //api.defaults.headers.common['Authorization'] = null;
    router.push({ name: 'Home' })
  }
  return { isAuthenticated, user, login, logout, refresh }
}
