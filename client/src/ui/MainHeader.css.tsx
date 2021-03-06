import styled from 'styled-components'
import theme from '../styles/theme'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: ${theme.color.white};
  display: block;
  position: relative;

  & > div.Logo {
    height: 48px;
    display: flex;
    align-items: center;
  }

  & > div.Logo > div.Title {
    width: 100%;
    height: 100%;
    display: flex;
    color: ${theme.color.white};
    justify-content: center;
    align-items: center;

    > a {
      height: 100%;
      text-decoration: none;
      color: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
        height: 50%;
      }
    }
  }

  & > div.SearchApart {
    display: contents;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > div.SearchInput {
      height: 60px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      > input {
        background-color: ${theme.color.white};
        border: 1px solid ${theme.color.gray1};
        border-radius: 8px;
        flex: 1;
        height: 60%;
        margin-left: 16px;
        color: ${theme.color.black};
        margin-right: 16px;
        flex-shrink: 0;
        padding-left: 16px;
        padding-right: 16px;
        line-height: normal;
        outline-style: none;
        box-shadow: none;
        vertical-align : middle;
        -webkit-appearance: none;
        ::placeholder {
          color: ${theme.color.inputText};
          font-size: 12px;
        }
      }

      > img {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 32px;
        width: auto;
        height: 30%;
        margin: auto;
        cursor: pointer;
      }
    }
  }

  & > div.TopNav {
    height: 75px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;

    > a {
      text-decoration: none;
      > div {
        height: 70px;
        width: 70px;
        font-size: 12px;
        font-weight : 600;
        cursor: pointer;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        > img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 8px;
          width: auto;
          height: 40%;
        }

        > div {
          color: ${theme.color.black};
          opacity : 1;
        }
      }

      > div.OnNav {
        > img {
          -webkit-filter: grayscale(100%);
          filter: gray;
        }

        > div {
          color: ${theme.color.black};
          opacity: 0.5;
        }
      }
    }
  }

  & > div.TopNavBorder {
    width: 100%;
    height: 1px;
    background-color: ${theme.color.gray1};
  }
`

export default Wrapper
