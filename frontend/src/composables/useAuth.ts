import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useAuth() {
  const token = ref(localStorage.getItem('token'))
  const isAuthenticated = ref(!!token.value)
  const router = useRouter()

  const login = async (login: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      })

      if (!response.ok)
        throw new Error(`${response.statusText} ${response.statusText}`)

      const { token: newToken } = await response.json()
      localStorage.setItem('token', newToken)
      isAuthenticated.value = true

      return true
    } catch (error) {
      console.log('Login error:', error)

      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    token.value = null
    isAuthenticated.value = false
    router.push('/login')
  }

  return { token, isAuthenticated, login, logout }
}
