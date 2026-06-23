import { useState, useEffect, useMemo } from 'react'
import livrosBase from './data/livros.json'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CampoBusca from './components/CampoBusca.jsx'
import FiltroCategoria from './components/FiltroCategoria.jsx'
import FiltroStatus from './components/FiltroStatus.jsx'
import PainelEstatisticas from './components/PainelEstatisticas.jsx'
import ListaLivros from './components/ListaLivros.jsx'
import './App.css'

function App() {
  const [busca, setBusca] = useState('')
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas')
  const [statusAtivo, setStatusAtivo] = useState('Todos')

  const [favoritos, setFavoritos] = useState(() => {
    const salvo = localStorage.getItem('catalogo:favoritos')
    return salvo ? JSON.parse(salvo) : []
  })

  useEffect(() => {
    localStorage.setItem(
      'catalogo:favoritos',
      JSON.stringify(favoritos)
    )
  }, [favoritos])

  const categorias = useMemo(() => {
    const unicas = livrosBase.map((l) => l.categoria)
    return [...new Set(unicas)].sort()
  }, [])

  const livrosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    return livrosBase.filter((livro) => {
      const texto = [
        livro.titulo,
        livro.autor,
        livro.categoria,
        ...livro.tags,
      ].join(' ').toLowerCase()
      return (
        texto.includes(termo) &&
        (categoriaAtiva === 'Todas' ||
          livro.categoria === categoriaAtiva) &&
        (statusAtivo === 'Todos' ||
          livro.status === statusAtivo)
      )
    })
  }, [busca, categoriaAtiva, statusAtivo])

  function alternarFavorito(idLivro) {
    setFavoritos((atual) =>
      atual.includes(idLivro)
        ? atual.filter((id) => id !== idLivro)
        : [...atual, idLivro]
    )
  }

  return (
    <>
      <Header />
      <main className="pagina" id="catalogo">
        <section className="hero">
          <p className="hero-tag">Projeto React guiado por dados</p>
          <h1>Catalogo digital para organizar leituras</h1>
          <p className="hero-sub">
            Interface construida com componentes reutilizaveis,
            filtros dinamicos, cards responsivos e dados em JSON.
          </p>
        </section>

        <PainelEstatisticas
          total={livrosBase.length}
          exibidos={livrosFiltrados.length}
          favoritos={favoritos.length}
          categorias={categorias.length}
        />

        <section className="filtros" id="filtros">
          <CampoBusca valor={busca} aoAlterar={setBusca} />
          <FiltroCategoria
            categorias={categorias}
            valor={categoriaAtiva}
            aoAlterar={setCategoriaAtiva}
          />
          <FiltroStatus
            valor={statusAtivo}
            aoAlterar={setStatusAtivo}
          />
        </section>

        <ListaLivros
          livros={livrosFiltrados}
          favoritos={favoritos}
          aoAlternarFavorito={alternarFavorito}
        />
      </main>
      <Footer />
    </>
  )
}

export default App