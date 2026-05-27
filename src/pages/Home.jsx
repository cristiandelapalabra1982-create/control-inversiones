 import { useEffect, useState } from 'react'

import { supabase } from '../lib/supabase'

import InvestmentCard from '../components/ui/InvestmentCard'
import PortfolioChart from '../components/ui/PortfolioChart'
import GoalCard from '../components/ui/GoalCard'

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

  const total = investments.reduce(
    (acc, investment) =>
      acc + Number(investment.amount),
    0
  )

  const usdTotal = investments
    .filter(
      (investment) =>
        investment.currency === 'USD'
    )
    .reduce(
      (acc, investment) =>
        acc + Number(investment.amount),
      0
    )

  const arsTotal = investments
  .filter(
    (investment) =>
      investment.currency === 'ARS'
  )
  .reduce(
    (acc, investment) =>
      acc + Number(investment.amount),
    0
  )

const emergencyGoal = 10000

const currentSavings = total

const monthlySavings = 500

  return (

    <div className="p-6">

      <h1 className="text-4xl font-bold mb-6">
        Dashboard Financiero
      </h1>

      <div
        className="
          bg-slate-800
          rounded-3xl
          p-6
          mb-6
        "
      >

        <p className="text-slate-400">
          Patrimonio Total
        </p>

        <h2 className="text-5xl font-bold mt-2">
          ${total}
        </h2>

        <p className="text-green-400 mt-3">
          {investments.length} inversiones activas
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">

        <div
          className="
            bg-slate-800
            p-5
            rounded-3xl
          "
        >

          <p className="text-slate-400">
            Total USD
          </p>

          <h3 className="text-3xl font-bold mt-2">
            ${usdTotal}
          </h3>

        </div>

        <div
          className="
            bg-slate-800
            p-5
            rounded-3xl
          "
        >

          <p className="text-slate-400">
            Total ARS
          </p>

          <h3 className="text-3xl font-bold mt-2">
            ${arsTotal}
          </h3>

        </div>

      </div>

      <div className="mb-6">
        <PortfolioChart investments={investments} />
      </div>
      <div className="mb-6">

  <GoalCard
    title="Fondo de Emergencia"
    current={currentSavings}
    target={emergencyGoal}
  />

</div>
<div
  className="
    bg-slate-800
    rounded-3xl
    p-6
    mb-6
  "
>

  <p className="text-slate-400">
    Ahorro Mensual
  </p>

  <h2 className="text-4xl font-bold mt-2">
    ${monthlySavings}
  </h2>

</div>

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

    </div>
  )
}