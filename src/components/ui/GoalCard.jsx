export default function GoalCard({
  title,
  current,
  target
}) {

  const percentage =
    (current / target) * 100

  return (

    <div
      className="
        bg-slate-800
        rounded-3xl
        p-6
      "
    >

      <div className="flex justify-between">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="text-green-400">
          {percentage.toFixed(0)}%
        </p>

      </div>

      <p className="mt-4 text-slate-300">

        ${current} / ${target}

      </p>

      <div
        className="
          bg-slate-700
          h-4
          rounded-full
          mt-4
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