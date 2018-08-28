import React from "react"
import { Route, getURLForRoute } from "../routing"
import { union } from "tagmeme"
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

const Counter = styled.div`
    display: flex;
    flex-direction: row;
    & > * {
        margin-right: 10px;
        &:last-child {
            margin-right: 0;
        }
    }
`

const Control = styled.div`
    display: flex;
    flex-direction: row;
    & > * {
        margin-right: 10px;
        &:last-child {
            margin-right: 0;
        }
    }
`

const Msg = union(["Increment", "Decrement", "Reset"])

const init = [0]

const update = (message, state) =>
    Msg.match(message, {
        Increment: amount => [state + amount],
        Decrement: amount => [state - amount],
        Reset: () => [0],
    })

const view = (state, dispatch) => (
    <Container>
        <Counter>
            <div>Count: {state}</div>
            <Control>
                <button onClick={() => dispatch(Msg.Decrement(1))}>-</button>
                <button onClick={() => dispatch(Msg.Increment(1))}>+</button>
                <button onClick={() => dispatch(Msg.Reset())}>Reset</button>
            </Control>
        </Counter>
        <div>
            <a href={getURLForRoute(Route.Other({}))}>Other Page</a>
        </div>
    </Container>
)

export default {
    init,
    update,
    view,
}
