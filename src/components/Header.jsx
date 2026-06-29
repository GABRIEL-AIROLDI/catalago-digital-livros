function Header() {
  return (
    <header className="header">
      <div className="header-marca">
        <span className="header-sigla">BV</span>
        <div>
          <p className="header-nome">Biblioteca Viva</p>
          <p className="header-sub">catalogo digital de leituras</p>
        </div>
      </div>
      <nav className="header-nav">
        <a href="#catalogo">Catalogo</a>
        <a href="#filtros">Filtros</a>
        <a href="#sobre">Sobre</a>
      </nav>
    </header>
  )
}

export default Header
