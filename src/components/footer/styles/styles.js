import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: black;
    z-index: 100;

    img {
        object-fit: cover;
        height: auto;
        vertical-align: middle;
        width: 260px;
    }
`;
