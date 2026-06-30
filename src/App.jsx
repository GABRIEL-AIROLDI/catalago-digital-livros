// src/App.jsx
import { useState, useEffect, useMemo } from 'react'
import livrosBase from './data/livros.json'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CampoBusca from './components/CampoBusca.jsx'
import FiltroCategoria from './components/FiltroCategoria.jsx'
import FiltroStatus from './components/FiltroStatus.jsx'
import FiltroVestibular from './components/FiltroVestibular.jsx' // NOVO IMPORT
import PainelEstatisticas from './components/PainelEstatisticas.jsx'
import ListaLivros from './components/ListaLivros.jsx'
import './App.css'

function App() {
  const [busca, setBusca] = useState('')
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas')
  const [statusAtivo, setStatusAtivo] = useState('Todos')
  const [vestibularAtivo, setVestibularAtivo] = useState('Todos') // NOVO ESTADO

  const [favoritos, setFavoritos] = useState(() => {
    const salvo = localStorage.getItem('catalogo:favoritos')
    return salvo ? JSON.parse(salvo) : []
  })

  useEffect(() => {
    localStorage.setItem('catalogo:favoritos', JSON.stringify(favoritos))
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
      
      const passaBusca = texto.includes(termo)
      const passaCategoria = categoriaAtiva === 'Todas' || livro.categoria === categoriaAtiva
      const passaStatus = statusAtivo === 'Todos' || livro.status === statusAtivo
      
      // NOVA LÓGICA DE FILTRO:
      const passaVestibular = vestibularAtivo === 'Todos' || 
        (livro.vestibular && livro.vestibular.includes(vestibularAtivo))

      return passaBusca && passaCategoria && passaStatus && passaVestibular
    })
  }, [busca, categoriaAtiva, statusAtivo, vestibularAtivo])

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
          <p className="hero-tag">Projeto React</p>
          <h1>biblioteca ULTRAPD para estudo intergalático</h1>
          <p className="hero-sub">
            Foque nas suas leituras obrigatórias da UFRGS e ENEM com o sistema de filtros avançados.
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
          {/* AGRUPANDO OS BOTÕES DE CHIP */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
             <FiltroStatus valor={statusAtivo} aoAlterar={setStatusAtivo} />
             <FiltroVestibular valor={vestibularAtivo} aoAlterar={setVestibularAtivo} />
          </div>
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