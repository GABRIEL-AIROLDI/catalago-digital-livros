const STATUS = [
  { valor: 'Todos',     rotulo: 'Todos' },
  { valor: 'quero ler', rotulo: 'Quero ler' },
  { valor: 'lendo',     rotulo: 'Lendo' },
  { valor: 'lido',      rotulo: '''''Lido' },
]

function FiltroStatus({ valor, aoAlterar }) {
  return (
    <div className="filtro-status">
      {STATUS.map((s) => (
        <button
          key={s.valor}
          className={`chip ${valor === s.valor ? 'chip-ativo' : ''}`}
          onClick={() => aoAlterar(s.valor)}
        >
          {s.rotulo}
        </button>
      ))}
    </div>
  )
}

export default FiltroStatus
