import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeadingContainer = styled.div`
  margin-top: 10px;
  width: 1366px;
  display: flex;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`

const Input = styled.input`
  width: 260px;
  height: 26px;
  @media(max-width: 435px) {
    width: 180px;
    height: 20px;
  }
`

const PokedexTitle = styled.div`
  font-family: 'Playfair Display', serif;
  margin-left: 5px;
  font-size: 24px;
  @media(max-width: 435px) {
    font-size: 16px;
  }
`

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  opacity: 0.3;
  position: relative;
  left: 255px;
  top: 5px;
  @media(max-width: 435px) {
    font-size: 15px;
    left: 175px;
    top: 4px;
  }
`

export { Container, HeadingContainer, SearchIcon, Form, PokedexTitle, Input }
