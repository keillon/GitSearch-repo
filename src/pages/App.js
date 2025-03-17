import gitLogo from '../assets/github-mark-white.png'
import Input from '../components/input/input'
import { Container } from './styles'
import ItemRepo from '../components/itemRepo/itemRepo'
import { useState } from 'react'
import Button from '../components/button/button'
import { api } from '../services/api'
import Footer from '../components/footer/footer'

function App () {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handdleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {
      const isExist = repos.find(repos => repos.id === data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert('Repositório não encontrado / Ou já existe!')
  }
  const hanndleRemoveRepo = id => {
    const confirmRemove = window.confirm(
      'Você tem certeza que deseja remover este repositório?'
    )

    if (confirmRemove) {
      setRepos(antigoRepo => antigoRepo.filter(repo => repo.id !== id))
    } else {
    }
  }

  return (
    <Container>
      <img src={gitLogo} alt='git logo' width={72} />
      <Input
        value={currentRepo}
        onChange={e => setCurrentRepo(e.target.value)}
        placeholder={'Digite um repositório'}
      />
      <Button onClick={handdleSearchRepo} />
      {repos.map(repo => (
        <ItemRepo
          repo={repo}
          hanndleRemoveRepo={hanndleRemoveRepo}
          key={repo.id}
        />
      ))}

      <Footer />
    </Container>
  )
}

export default App
