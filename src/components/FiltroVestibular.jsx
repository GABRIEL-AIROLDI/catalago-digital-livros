const VESTIBULARES = [
    { valor: 'Todos', rotulo: 'Todas as Leituras' },
    { valor: 'UFRGS', rotulo: 'UFRGS' },
    { valor: 'ENEM', rotulo: 'ENEM' }
  ]
  
  function FiltroVestibular({ valor, aoAlterar }) {
    return (
      <div className="filtro-status">
        {VESTIBULARES.map((v) => (
          <button
            key={v.valor}
            className={`chip ${valor === v.valor ? 'chip-ativo' : ''}`}
            onClick={() => aoAlterar(v.valor)}
          >
            {v.rotulo}
          </button>
        ))}
      </div>
    )
  }
  
  export default FiltroVestibular