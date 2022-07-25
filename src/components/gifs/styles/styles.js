import styled from 'styled-components';

export const GifContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: default;

    span {
        letter-spacing: 0px;
        color: #B2B2B2;
        opacity: 1;
        font-size: 18px;
    }
`;

export const ParentSpan = styled.span`
    display: block;
    width: 100%;
    height: 19px;
    margin-bottom: 24px;
    font: normal normal normal 16px/16px Lato;
`;

export const ChildSpan = styled.span`
    font: normal normal bold 16px/16px Lato;
    margin-left: 5px;
`;

export const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    width: 100%;

    img {
        object-fit: cover;
        width: 100%;
        height: auto;
        vertical-align: middle;
        width: 260px;
        border-radius: 5px;
        position: relative;
        cursor: pointer;
        flex: 1 1 260px;
        transition: transform .5s;

        :hover {
            transform: scale(1.5);
            z-index: 2;
        }
    }
`;