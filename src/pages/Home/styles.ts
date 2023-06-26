import styled from 'styled-components'
export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;

  h1 {
    color: ${(props) => props.theme.colors.gray[500]};
  }

  p {
    color: ${(props) => props.theme.colors.red[500]};
    text-align: justify;
  }
`
