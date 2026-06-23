const STATUS = ['Todos', 'Quero ler', 'Lendo', 'Lido']

function FiltroStatus({ valor, aoAlterar }) {
  return (
    <div className="filtro-status">
      {STATUS.map((s) => (
        <button
          key={s}
          className={`chip ${valor === s ? 'chip-ativo' : ''}`}
          onClick={() => aoAlterar(s)}
        >
          {s}
        </button>
      ))}
    </div>
  )
}

export default FiltroStatus