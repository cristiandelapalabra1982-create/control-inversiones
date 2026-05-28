 import { useEffect, useState } from 'react'

import { getQuote }
from '../../services/marketApi'

export default function RealMarketCard({
  symbol
}) {

  const [quote, setQuote] = useState(null)

  useEffect(() => {

    async function fetchQuote() {

      const data =
        await getQuote(symbol)

      setQuote(data)
    }

    fetchQuote()

  }, [symbol])

  if (!quote) {

    return (

      <div
        className="
          bg-slate-800
          rounded-3xl
          p-5
        "
      >
        Cargando...
      </div>

    )
  }

  return (

    <div
      className="
        bg-slate-800
        rounded-3xl
        p-5
        shadow-lg
      "
    >

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          {symbol}
        </h2>

        <p
          className={
            quote.change >= 0
              ? 'text-green-400 font-bold'
              : 'text-red-400 font-bold'
          }
        >
          {quote.change?.toFixed(2)}%
        </p>

      </div>

      <h3 className="text-4xl font-bold mt-4">

        ${quote.price?.toFixed(2)}

      </h3>

    </div>
  )
}