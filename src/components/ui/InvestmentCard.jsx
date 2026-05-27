 import { supabase } from '../../lib/supabase'

export default function InvestmentCard({
  id,
  title,
  value,
  color,
  refreshInvestments
}) {

  async function handleDelete() {

    const confirmDelete = confirm(
      '¿Eliminar inversión?'
    )

    if (!confirmDelete) return

    const { error } = await supabase
      .from('investments')
      .delete()
      .eq('id', id)

    if (error) {
      alert('Error al eliminar')
      console.log(error)
      return
    }

    alert('Inversión eliminada')

    refreshInvestments()
  }

  return (

    <div
      className="
        bg-slate-800
        rounded-3xl
        p-5
        border-l-4
        mb-4
      "
      style={{
        borderColor: color
      }}
    >

      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-xl font-semibold">
            {title}
          </h3>

          <p className="text-slate-300 mt-1">
            {value}
          </p>

        </div>

        <button
          onClick={handleDelete}
          className="
            bg-red-500
            hover:bg-red-600
            px-4
            py-2
            rounded-xl
          "
        >
          Eliminar
        </button>

      </div>

    </div>
  )
}