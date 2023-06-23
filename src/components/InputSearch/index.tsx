import { MouseEventHandler, useState, useEffect, useRef } from 'react'
import { api } from '../../lib/api'
import { BoxHero, BoxListHeroes, InputSearchContainer } from './styles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export interface Hero {
  id: number
  name: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface ResponseData {
  limit: number
  total: number
  results: Hero[]
}

export function InputSearch() {
  const boxListRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [nameSearch, setNameSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [listHeroes, setListHeroes] = useState<Array<Hero>>([])

  async function handleFetchByName(nameHero: string) {
    try {
      setIsLoading(true)
      const { data: responseData } = await api.get('/characters', {
        params: {
          limit: 10,
          nameStartsWith: nameHero,
        },
      })

      const { results } = responseData.data as ResponseData

      setListHeroes(results)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (nameSearch.length) {
      handleFetchByName(nameSearch)
    }
  }, [nameSearch])

  const handleInputFocus = () => {
    if (listHeroes.length > 0) {
      if (boxListRef.current) boxListRef.current.style.display = 'block'
    }
  }

  const handleInputBlur = () => {
    setTimeout(() => {
      if (boxListRef.current)
        if (!boxListRef.current.contains(document.activeElement))
          boxListRef.current.style.display = 'none'
    }, 0)
  }

  const handleBoxClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    if (inputRef.current) inputRef.current.focus()
  }

  return (
    <InputSearchContainer>
      <input
        type="text"
        onChange={({ target }) => setNameSearch(target.value)}
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {listHeroes.length || isLoading ? (
        <BoxListHeroes ref={boxListRef} onClick={handleBoxClick}>
          {listHeroes.length ? (
            listHeroes.map((hero) => (
              <BoxHero to={`/hero/${hero.id}`} key={hero.id}>
                <img
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt=""
                />

                <p>{hero.name}</p>
              </BoxHero>
            ))
          ) : (
            <Skeleton count={5} baseColor="#f87171" highlightColor="#fecaca" />
          )}
        </BoxListHeroes>
      ) : null}
    </InputSearchContainer>
  )
}
