 import { useEffect, useState } from 'react'

import { supabase } from '../lib/supabase'

import InvestmentCard from '../components/ui/InvestmentCard'
import PortfolioChart from '../components/ui/PortfolioChart'

export default function Home() {

  const [investments, setInvestments] = useState([])

  const fetchInvestments = async () => {

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

  return (

    <div className="p-6">

      <h1 className="text-4xl font-bold mb-6">
        Control de Inversiones
      </h1>

      <div className="grid gap-4">

        {investments.map((investment) => (

          <InvestmentCard
            key={investment.id}
            id={investment.id}
            title={investment.title}
            value={`${investment.amount} ${investment.currency}`}
            color="#4ade80"
            refreshInvestments={fetchInvestments}
          />

        ))}

      </div>

      <div className="mt-6">
        <PortfolioChart />
      </div>

    </div>
  )
}