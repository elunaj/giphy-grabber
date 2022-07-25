import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: block;
    white-space: nowrap;
    width: 100%;
    height: 142px;
    margin-top: .5rem;
`;

export const SearchBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    width: 100%;
    height: auto;
`;

export const SearchBox = styled.input`
    box-sizing: border-box;
    appearance: none;
    font-weight: normal;
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    opacity: 1;
    position: relative;
    height: 52px;
    letter-spacing: 1px;
    font-size: 1rem;

    &[type=text] {
        padding: 10px;
        font: normal normal normal 15px/12px Arial;
        letter-spacing: 0px;
        color: #3B3B3B;
        opacity: 1;
    }
`;

export const SearchBoxButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    width: 52px;
    height: 52px;
    /* UI Properties */
    background: linear-gradient(45deg, rgb(153, 51, 255) 0%, rgb(255, 102, 102) 100%);
    border: none;
    opacity: 1; 
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    line-height: 40px;
    padding: 0px 15px;
    text-align: center;
    text-transform: none;

    img {
        display: block;
    }
`;

export const PreviousSearchesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 27px;
    margin-top: .5rem; 
    cursor: default;


    h1 {
        text-align: left;
        font: normal normal normal 12px/12px Lato;
        letter-spacing: 0px;
        color: #B2B2B2;
        opacity: 1;
        margin-right: 15px;

        span {
            display: block;
        }
    }

    div { 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        text-decoration: underline;
        font: normal normal normal 12px/12px Lato;
        letter-spacing: 0px;
        color: #00CCFF;
        opacity: 1;
        cursor: pointer;

        span {
            margin-left: 5px;

            &:nth-child(1) {
                margin-left: 0px;
            }
        }
    }
`
