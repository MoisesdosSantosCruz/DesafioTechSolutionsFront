import { useState } from 'react'
import { Link } from 'react-router'

function CadastroChamado({ aoCadastrar }) {

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState('')
  const [solicitante, setSolicitante] = useState('')
  const [status, setStatus] = useState('')
  
  function cadastrarChamado(evento) {
    evento.preventDefault()

    const novoChamado = {
      titulo,
      descricao,
      prioridade,
      solicitante,
      status
    }

    aoCadastrar(novoChamado)
    alert('Chamado cadastrado com sucesso!')

    setTitulo('')
    setDescricao('')
    setPrioridade('')
    setSolicitante('')
    setStatus('')
  }
  return (
    <main className="pagina-clientes">
      <h1>Cadastrar novo chamado</h1>
      <form className="formulario-cliente"
        onSubmit={cadastrarChamado}>
       
        <label htmlFor="nome">Titulo</label>
        <input
          id="nome"
          type="text"
          value={titulo}
          onChange={(evento) =>
            setTitulo(evento.target.value)}
          required
        />
        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          type="text"
          value={descricao}
          onChange={(evento) =>
            setDescricao(evento.target.value)}
          required
        />
        <label htmlFor="prioridade">Prioridade</label>
        <input
          id="telefone"
          type="text"
          value={prioridade}
          onChange={(evento) =>
            setPrioridade(evento.target.value)}
        />
        <label htmlFor="solicitante">Solicitante</label>
        <input
          id="solicitante"
          type="text"
          value={solicitante}
          onChange={(evento) =>
            setSolicitante(evento.target.value)}
        />
        <label htmlFor="status">Status</label>
        <input
          id="status"
          type="text"
          value={status}
          onChange={(evento) =>
            setStatus(evento.target.value)}
          required
        />
        <button type="submit">Cadastrar chamado</button>
      </form>
      <Link to="/chamados">Voltar para Gerenciamento de
        Chamados
      </Link>
    </main>
  )
}
export default CadastroChamado