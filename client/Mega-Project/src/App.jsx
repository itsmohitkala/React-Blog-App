import { useEffect, useState } from 'react'

import { login, logout } from './store/authSlice'
import authService from './appwrite/Auth'
import { Header, Footer } from './components/index.js'
import { Outlet } from 'react-router-dom'
import './App.css'
import { useDispatch } from 'react-redux'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])
  if (loading) {
    return (
      <div className='bg-red-200'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    )
  } else {
    return (
      <div className='bg-red-800'>
        loading the app....
      </div>
    )
  }
}

export default App
