export default function MarketCard({
  symbol,
  price,
  change
}) {

  return (

    <div
      className="
        bg-slate-800
        rounded-3xl
        p-5
      "
    >

      <div className="flex justify-between">

        <h2 className="text-2xl font-bold">
          {symbol}
        </h2>

        <p
          className={
            change >= 0
              ? 'text-green-400'
              : 'text-red-400'
          }
        >
          {change}%
        </p>

      </div>

      <h3 className="text-4xl font-bold mt-4">
        ${price}
      </h3>

    </div>
  )
}