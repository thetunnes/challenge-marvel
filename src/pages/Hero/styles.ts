import styled from 'styled-components'

export const HeroContainer = styled.main`
  position: relative;
  max-width: 768px;
  max-height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  padding: 2rem;

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.gray[800]};
    text-align: center;
  }

  .center {
    margin: 0 auto;
  }
`

export const HeroContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    flex: 1;
  }
`

export const ImgHero = styled.img`
  border-radius: 8px;
  aspect-ratio: 1/1;
  width: 100%;
  max-height: 70vh;
  max-width: 512px;
  margin: 0 auto;
`

export const PrevPage = styled.button`
  position: absolute;
  left: 0;
  width: max-content;
  background: none;
  color: ${(props) => props.theme.colors.gray[500]};
  transition: color 0.4s;
  border: none;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.red[300]};
  }
`
