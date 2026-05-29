import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {

    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert(error.message)
      return
    }

    alert('Bienvenido 🚀')
  }

 async function handleRegister() {

  if (!email || !password) {
    alert('Completa email y contraseña')
    return
  }

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

  console.log(data)

  if (error) {
    console.log(error)
    alert(error.message)
    return
  }

  alert('Usuario creado 🚀')
}
  return (

    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-950
      "
    >

      <div
        className="
          bg-slate-900
          p-8
          rounded-3xl
          w-full
          max-w-md
          shadow-2xl
        "
      >

        <h1 className="text-4xl font-bold mb-6 text-center">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="grid gap-4"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              bg-slate-800
              p-4
              rounded-xl
            "
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              bg-slate-800
              p-4
              rounded-xl
            "
          />

          <button
            className="
              bg-green-500
              hover:bg-green-600
              p-4
              rounded-xl
              font-bold
            "
          >
            Ingresar
          </button>

        </form>

        <button
          onClick={handleRegister}
          className="
            mt-4
            w-full
            bg-slate-700
            hover:bg-slate-600
            p-4
            rounded-xl
          "
        >
          Crear cuenta
        </button>

      </div>

    </div>
  )
}