function PainelEstatisticas({ total, exibidos, favoritos, categorias }) {
  return (
    <div className="painel-estatisticas">
      <div className="metrica">
        <strong>{total}</strong>
        <span>Livros cadastrados</span>
      </div>
      <div className="metrica">
        <strong>{exibidos}</strong>
        <span>Resultado atual</span>
      </div>
      <div className="metrica">
        <strong>{favoritos}</strong>
        <span>Favoritos</span>
      </div>
      <div className="metrica">
        <strong>{categorias}</strong>
        <span>Categorias</span>
      </div>
    </div>
  )
}

export default PainelEstatisticas