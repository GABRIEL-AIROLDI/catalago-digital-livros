// src/components/CardLivro.jsx
function CardLivro({ livro, favorito, aoAlternarFavorito }) {
  return (
    <article className="card-livro">
      <div className="card-topo">
        <span className="card-categoria">{livro.categoria}</span>
        <button
          className={`btn-favorito ${favorito ? 'favoritado' : ''}`}
          onClick={() => aoAlternarFavorito(livro.id)}
        >
          {favorito ? 'Favoritado' : 'Favoritar'}
        </button>
      </div>

      {}
      {livro.capa && (
        <img src={livro.capa} alt={`Capa do livro ${livro.titulo}`} className="card-capa" />
      )}

      <h3 className="card-titulo">{livro.titulo}</h3>
      <p className="card-autor">{livro.autor}</p>
      <p className="card-descricao">{livro.descricao}</p>

      <div className="card-meta">
        <span className="selo">{livro.status}</span>
        {livro.vestibular && livro.vestibular.map(v => (
            <span key={v} className="selo" style={{ borderColor: '#6d28d9', color: '#c4b5fd' }}>{v}</span>
        ))}
      </div>

      <div className="card-tags">
        {livro.tags.map((tag) => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
      </div>
    </article>
  )
}

export default CardLivro