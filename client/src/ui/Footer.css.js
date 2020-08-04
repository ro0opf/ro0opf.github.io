import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: auto;
    background-color: #f9f9f9;
    text-align: center;
    
    & >.MobileToPc {
        cursor: pointer;
        font-size: 1em;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    & > ul{
        list-style: none;
        margin:0 auto;
        display: block;
        text-align: center;
        padding: 0;
    }

    & > ul > li{
        display: inline-block;
        font-size: 0.8em;
        color: rgb(116, 116, 116);
    }

    & > ul > li.Seperator{
        margin-left: 15px;
        margin-right: 15px;
    }
    
    & > div.copyright{
        font-size: 0.8em;
        padding-bottom: 10px;
    }

    &  > ul > li > div{
        cursor: pointer;
    }
`;



