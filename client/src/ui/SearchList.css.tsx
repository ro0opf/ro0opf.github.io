// src/ui/SearchList.css.tsx
import styled from 'styled-components'
import theme from '../styles/theme'

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  margin-top : -8px;
  padding-left: 16px;
  padding-right: 16px;
  z-index: 10;
  
  & > ul {
    border: 1.5px solid ${theme.color.main};
    border-radius: 12px;
    background-color: white;
    color: ${theme.color.normalText};
    font-size: 14px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    overflow: scroll;
    overflow-x: hidden;
    max-height : 130px;

    > li {
      margin-bottom: 8px;
    }
  }
`

export default Wrapper
