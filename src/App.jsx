 import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

import Home from './pages/Home'
import Login from './pages/Login'

export default function App() {

  const [session, setSession] = useState(null)

  useEffect(() => {

    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        setSession(session)
      })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    return () => subscription.unsubscribe()

  }, [])

  if (!session) {
    return <Login />
  }

  return <Home />
}