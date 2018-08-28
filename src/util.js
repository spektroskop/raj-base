import styled from "styled-components"

export const Row = ({ spacing }) => styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-self: flex-start;
    & > * {
        margin-right: ${spacing}px;
        &:last-child {
            margin-right: 0;
        }
    }
`

export const Column = ({ spacing }) => styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-start;
    & > * {
        margin-bottom: ${spacing}px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`
