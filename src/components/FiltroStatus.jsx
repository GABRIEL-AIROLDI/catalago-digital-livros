const STATUS = [
  { valor: 'Todos',     rotulo: 'Todos' },
  { valor: 'Quero ler', rotulo: 'Quero ler' },
  { valor: 'Lendo',     rotulo: 'Lendo' },
  { valor: 'Lido',      rotulo: 'Lido' },
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