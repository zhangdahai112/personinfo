"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface User {
  id: string
  name: string
  phone: string
  email?: string
  registeredAt: string
}

interface UserContextType {
  user: User | null
  login: (phone: string, name: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 检查本地存储中的用户信息
    const savedUser = localStorage.getItem('zhuge-user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('zhuge-user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (phone: string, name: string) => {
    setIsLoading(true)
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000))

      const newUser: User = {
        id: Date.now().toString(),
        name,
        phone,
        registeredAt: new Date().toISOString()
      }

      setUser(newUser)
      localStorage.setItem('zhuge-user', JSON.stringify(newUser))
    } catch (error) {
      console.error('Login error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('zhuge-user')
  }

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
