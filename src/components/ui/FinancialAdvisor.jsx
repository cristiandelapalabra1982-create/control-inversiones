export default function FinancialAdvisor({
  investments
}) {

  const total = investments.reduce(
    (acc, investment) =>
      acc + Number(investment.amount),
    0
  )

  const getCategoryTotal = (category) => {

    return investments
      .filter(
        (investment) =>
          investment.category === category
      )
      .reduce(
        (acc, investment) =>
          acc + Number(investment.amount),
        0
      )
  }

  const crypto =
    getCategoryTotal('Cripto')

  const etf =
    getCategoryTotal('ETF')

  const cash =
    getCategoryTotal('Cash')

  const actions =
    getCategoryTotal('Acción')

  const cryptoPercent =
    ((crypto / total) * 100)

  const etfPercent =
    ((etf / total) * 100)

  const cashPercent =
    ((cash / total) * 100)

  const actionPercent =
    ((actions / total) * 100)

  const messages = []

  if (cryptoPercent > 35) {

    messages.push(
      '⚠️ Alto riesgo en cripto'
    )
  }

  if (cashPercent < 10) {

    messages.push(
      '⚠️ Baja liquidez disponible'
    )
  }

  if (etfPercent > 40) {

    messages.push(
      '✅ Buena base diversificada ETF'
    )
  }

  if (actionPercent > 50) {

    messages.push(
      '⚠️ Mucha exposición acciones'
    )
  }

  if (
    messages.length === 0
  ) {

    messages.push(
      '✅ Portfolio equilibrado'
    )
  }

  return (

    <div
      className="
        bg-slate-800
        rounded-3xl
        p-6
      "
    >

      <h2 className="text-2xl font-bold mb-6">
        IA Financiera
      </h2>

      <div className="grid gap-3">

        {messages.map(
          (message, index) => (

            <div
              key={index}
              className="
                bg-slate-700
                p-4
                rounded-xl
              "
            >

              {message}

            </div>

          )
        )}

      </div>

    </div>
  )
}