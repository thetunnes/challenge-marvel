import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const InputSearchContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  input {
    background-color: ${(props) => props.theme.colors.gray[300]};
    border: 0;
    border-radius: 4px;
    padding: 0.5rem 0.75rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.gray[500]};
    }
  }
`

export const BoxListHeroes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) => props.theme.colors.gray[300]};
  border: 1px solid ${(props) => props.theme.colors.gray[500]};
  border-radius: 6px;

  > *:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.red[300]};
  }
`

export const BoxHero = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  text-decoration: none;

  > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray[800]};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[400]};
    transition: all 0.4s;

    p {
      transition: color 0.4s;
      color: ${(props) => props.theme.colors.red[300]};
    }
  }
`
