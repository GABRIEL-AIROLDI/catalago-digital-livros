function FiltroCategoria({ categorias, valor, aoAlterar }) {
  return (
    <label className="filtro-categoria">
      <span>Categoria</span>
      <select
        value={valor}
        onChange={(e) => aoAlterar(e.target.value)}
      >
        <option value="Todas">Todas</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </label>
  )
}

export default FiltroCategoria