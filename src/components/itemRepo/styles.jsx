import styled from 'styled-components'

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 16px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 1rem;
  }

  a {
    color: #fafafa90;
    text-decoration: none;
    font-size: 24px;
    text-decoration: underline;
  }
  a:hover {
    color: #fafafa;
    transition: 0.5s ease;
  }
  a.apagar {
    color: #fafafa;
    font-size: 24px;
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
  }
  a.apagar:hover {
    color: #fafafa90;
    transition: 0.5s ease;
  }

  hr {
    margin-top: 0.8rem;
    margin-bottom: 1rem;
  }
`
