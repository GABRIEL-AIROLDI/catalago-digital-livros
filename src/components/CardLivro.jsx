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

      <h3 className="card-titulo">{livro.titulo}</h3>
      <p className="card-autor">{livro.autor}</p>
      <p className="card-descricao">{livro.descricao}</p>

      <div className="card-meta">
        <span className="selo">{livro.status}</span>
        <span className="selo">{livro.paginas} paginas</span>
        <span className="selo">Nota {livro.nota}</span>
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