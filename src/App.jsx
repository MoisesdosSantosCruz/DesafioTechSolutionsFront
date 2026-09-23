import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'

//Componentes
import Cabecalho from './components/Cabecalho'
import CardModulo from './components/CardModulo'

//Páginas de Chamados
import Chamados from './pages/Chamados'
import ListaChamados from './pages/ListaChamados'
import chamadosInciais from './data/chamados'
import CadastroChamado from './pages/CadastroChamados'
import EditarChamados from './pages/EditarChamados'


function App() {
  const [chamados, setChamados] = useState(chamadosInciais)

  function adicionarChamado(novoChamado) {
    const chamadoComId = {
      id: Date.now(),
      ...novoChamado,
    }
    setChamados((listaAtual) => [
      ...listaAtual,
      chamadoComId,
    ])
  }

  function excluirChamado(id) {
    setChamados((listaAtual) =>
      listaAtual.filter((chamado) => chamado.id !== id)
    )
  }

  function alterarChamado(chamadoAtualizado) {
    setChamados((listaAtual) =>
      listaAtual.map((chamado) =>
        chamado.id === chamadoAtualizado.id
          ? chamadoAtualizado
          : chamado
      )
    )
  }

  const [mostrarModulos, setMostrarModulos] = useState(true)

  const [modulos] = useState([
    {
      id: 1,
      titulo: 'Gerenciamento Chamados',
      descricao: 'Cadastre e consulte os chamados disponíveis.',
      rota: '/chamados',
    },
  
  ])
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="aplicacao">
            <Cabecalho />
            <main className="conteudo-principal">
              <p className="introducao">
                Aplicação desenvolvida nas disciplinas de Desenvolvimento Web III e
                Tópicos de Programação II.
              </p>
              <button
                type="button"
                className="botao-alternar"
                onClick={() => setMostrarModulos(!mostrarModulos)}
              >
                {mostrarModulos ? 'Ocultar módulos' : 'Exibir módulos'}
              </button>
              {mostrarModulos && (
                <section className="modulos">
                  {modulos.map((modulo) => (
                    <CardModulo
                      key={modulo.id}
                      titulo={modulo.titulo}
                      descricao={modulo.descricao}
                      rota={modulo.rota}
                    />
                  ))}
                </section>
              )}
            </main>
          </div>
        }
      />
        <Route
          path="/chamados"
          element={<Chamados />}
        />

      <Route
        path="/chamados/cadastrar"
        element={<CadastroChamado
          aoCadastrar={adicionarChamado} />}
      />
        <Route
        path= "/chamados/listar"
        element={<ListaChamados
          chamados={chamados}
          aoExcluir={excluirChamado}/>}

        />

        <Route
        path= "/chamados/editar/:id"
        element={<EditarChamados
          chamados={chamados}
          aoAlterar={alterarChamado}/>}

        />


    </Routes>
  )
}

export default App
