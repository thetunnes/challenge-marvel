import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HeroContainer, PrevPage } from './styles'
import { api } from '../../lib/api'
import { Hero } from '../../components/InputSearch'
import Skeleton from 'react-loading-skeleton'
import { IconPrev } from '../../components/IconPrev'

interface Params {
  heroId: string
}

interface AllDataHero extends Hero {
  description: string
}

interface ResponseData {
  limit: number
  total: number
  results: AllDataHero[]
}

export function HeroPage() {
  const { heroId } = useParams<keyof Params>() as Params
  const navigate = useNavigate()

  const [hero, setHero] = useState<AllDataHero | undefined>()

  async function getAllDataHero() {
    try {
      const { data: responseData } = await api.get(`/characters/${heroId}`)

      const { results } = responseData.data as ResponseData

      setHero(results[0])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllDataHero()
  }, [])

  return (
    <HeroContainer>
      <PrevPage onClick={() => navigate(-1)}>
        <IconPrev />
      </PrevPage>
      {!hero ? (
        <>
          <Skeleton height={300} baseColor="#3b3b38" highlightColor="#cfcfcf" />
          <Skeleton
            width={140}
            baseColor="#3b3b38"
            highlightColor="#cfcfcf"
            containerClassName="center"
          />
          <Skeleton baseColor="#3b3b38" highlightColor="#cfcfcf" />
        </>
      ) : (
        <>
          <img
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt=""
          />
          <h1>{hero.name}</h1>
          <p>
            {hero.description.length
              ? hero.description
              : 'This hero not have description.'}
          </p>
        </>
      )}
    </HeroContainer>
  )
}
