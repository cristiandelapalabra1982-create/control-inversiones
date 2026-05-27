export default function InvestmentCard({
  title,
  value,
  color
}) {
  return (
    <div
      className="
        bg-slate-800
        rounded-2xl
        p-5
        border-l-4
      "
      style={{
        borderColor: color
      }}
    >

      <p className="text-slate-400">
        {title}
      </p>

      <h3 className="text-2xl font-semibold mt-2">
        {value}
      </h3>

    </div>
  )
}