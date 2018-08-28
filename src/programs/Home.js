import React from "react"
import { Route, getURLForRoute } from "../routing"
import { union } from "tagmeme"
import styled from "styled-components"
import { Row, Column } from "../util"

const Container = styled(Column({ spacing: 10 }))``

const Counter = styled(Row({ spacing: 10 }))``

const Control = styled(Row({ spacing: 10 }))``

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
