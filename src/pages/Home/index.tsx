import { InputSearch } from '../../components/InputSearch'
import MarvelIcon from '../../components/LogoMarvel'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <MarvelIcon />
      <h1>Marvel API</h1>
      <p>
        This project was developed as a challenge, where I wanted to create a
        Front-end application that consumes data from the Rest API of Marvel
        Studios.
      </p>
      <InputSearch />
    </HomeContainer>
  )
}
