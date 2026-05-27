 import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Investments from './pages/Investments'
import Goals from './pages/Goals'
import Profile from './pages/Profile'
import AddInvestment from './pages/AddInvestment'

function App() {
  return (
    <BrowserRouter>

      <div className="bg-slate-950 min-h-screen text-white pb-24">

        <div className="max-w-md mx-auto p-5">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-investment" element={<AddInvestment />}
            />
          </Routes>

        </div>

        <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800">

          <div className="max-w-md mx-auto flex justify-around p-4">

            <Link to="/">Inicio</Link>

            <Link to="/investments">
              Inversiones
            </Link>

            <Link to="/goals">
              Objetivos
            </Link>

            <Link to="/profile">
              Perfil
            </Link>

            <Link to="/add-investment">
             Agregar
            </Link>

          </div>

        </nav>

      </div>

    </BrowserRouter>
  )
}

export default App