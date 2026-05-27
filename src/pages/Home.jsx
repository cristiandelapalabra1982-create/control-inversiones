 import { useEffect, useState } from 'react'

import { supabase } from '../lib/supabase'

import InvestmentCard from '../components/ui/InvestmentCard'
import PortfolioChart from '../components/ui/PortfolioChart'

export default function Home() {

  const [investments, setInvestments] = useState([])

  async function fetchInvestments() {

    const { data, error } = await supabase
      .from('investments')
      .select('*')

    if (error) {
      console.log(error)
      return
    }

    setInvestments(data)
  }

  useEffect(() => {
    fetchInvestments()
  }, [])

  const total = investments.reduce(
    (acc, investment) =>
      acc + Number(investment.amount),
    0
  )

  return (
    <div>

      <h1 className="text-3xl font-bold mb-5">
        Inicio
      </h1>

      <div className="bg-slate-800 rounded-3xl p-6 mb-5">

        <p className="text-slate-400">
          Patrimonio Total
        </p>

        <h2 className="text-5xl font-bold mt-2">
          ${total}
        </h2>

        <p className="text-green-400 mt-3">
          Inversiones cargadas: {investments.length}
        </p>

      </div>

      <div className="grid gap-4">

        {investments.map((investment) => (

          <InvestmentCard
            key={investment.id}
            title={investment.title}
            value={`${investment.amount} ${investment.currency}`}
            color="#4ade80"
          />

        ))}

      </div>

      <div className="mt-6">
        <PortfolioChart />
      </div>

    </div>
  )
}