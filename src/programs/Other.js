import React from "react"
import { Route, getURLForRoute } from "../routing"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`

export default {
    init: [],
    update: () => [],
    view: () => (
        <Container>
            <div>Other</div>
            <div>
                <a href={getURLForRoute(Route.Home({}))}>Go Home</a>
            </div>
        </Container>
    ),
}
