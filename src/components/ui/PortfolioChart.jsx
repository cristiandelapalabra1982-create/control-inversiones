import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

export default function PortfolioChart() {

  const data = [
    { month: 'Ene', value: 420000 },
    { month: 'Feb', value: 470000 },
    { month: 'Mar', value: 510000 },
    { month: 'Abr', value: 590000 },
    { month: 'May', value: 650000 },
    { month: 'Jun', value: 786368 },
  ]

  return (
    <div className="bg-slate-800 rounded-3xl p-5">

      <h2 className="text-xl font-semibold mb-5">
        Evolución Patrimonial
      </h2>

      <div className="h-64">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="month" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#4ade80"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}