import React from 'react'
import { ItemContainer } from './styles'

function ItemRepo ({repo, hanndleRemoveRepo}) {

    const handdleRemove = () =>{
        hanndleRemoveRepo(repo.id)
    }
  return (
    <ItemContainer >
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='blank'>{repo.name}</a><br/>
      <a href='#' className='apagar' onClick={() => handdleRemove(repo.id)}>Remover</a>
      <hr/>
    </ItemContainer>
  )
}

export default ItemRepo
