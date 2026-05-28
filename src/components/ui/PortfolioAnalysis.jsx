export default function PortfolioAnalysis({
  investments
}) {

  const total = investments.reduce(
    (acc, investment) =>
      acc + Number(investment.amount),
    0
  )

  const categories = {}

  investments.forEach((investment) => {

    const category =
      investment.category || 'Sin categoría'

    if (!categories[category]) {
      categories[category] = 0
    }

    categories[category] += Number(
      investment.amount
    )

  })

  return (

    <div
      className="
        bg-slate-800
        rounded-3xl
        p-6
      "
    >

      <h2 className="text-2xl font-bold mb-6">
        Análisis Portfolio
      </h2>

      <div className="grid gap-4">

        {Object.entries(categories).map(
          ([category, amount]) => {

            const percentage =
              ((amount / total) * 100)
              .toFixed(1)

            return (

              <div
                key={category}
              >

                <div
                  className="
                    flex
                    justify-between
                    mb-1
                  "
                >

                  <p>{category}</p>

                  <p>
                    {percentage}%
                  </p>

                </div>

                <div
                  className="
                    bg-slate-700
                    h-4
                    rounded-full
                    overflow-hidden
                  "
                >

                  <div
                    className="
                      bg-green-500
                      h-full
                      rounded-full
                    "
                    style={{
                      width: `${percentage}%`
                    }}
                  />

                </div>

              </div>

            )

          }
        )}

      </div>

    </div>
  )
}