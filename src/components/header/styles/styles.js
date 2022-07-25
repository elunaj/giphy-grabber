import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    cursor: default;

    @media (max-width: 375px) {
        display: inline-block;
      }

    img {
        width: 25px;
        height: 29px;
        margin-right: 16px;
    }

    span {
        font: normal normal 900 28px/34px Lato;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
        opacity: 1;
        height: 29px;

        @media (max-width: 370px) {
            font-size: 24px;
          }
    }
`;
