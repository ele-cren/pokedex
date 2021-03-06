import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 1366px;
  margin: 10px auto 0 auto;
`

export const Message = styled.div`
  margin-left: 5px;
  background-color: rgba(140, 0, 0, 0.2);
  color: #5e0000;
  max-width: 300px;
  padding: 10px 5px 10px 5px;
  border-radius: 2px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #5e0000;
  padding-bottom: 2px;
  border-bottom: 1px solid #5e0000;
`
