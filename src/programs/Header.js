import React from "react"
import { union } from "tagmeme"
import { withSubscriptions, mapSubscription } from "raj-subscription"
import styled from "styled-components"
import { Route } from "../routing"

const Header = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 12px 10px 8px 10px;
`

const Msg = union(["SetRoute"])

const init = [{ route: null }]

const subscriptions = route => state => ({
    route: () => mapSubscription(route(), Msg.SetRoute),
})

const update = (message, state) =>
    Msg.match(message, {
        SetRoute: route => [{ route }],
    })

const viewRoute = route =>
    Route.match(
        route,
        { Home: () => " — Home", Other: () => " — Other" },
        () => "",
    )

const view = (state, dispatch) => (
    <Header>Header{viewRoute(state.route)}</Header>
)

export default ({ route }) =>
    withSubscriptions({
        init,
        update,
        view,
        subscriptions: subscriptions(route),
    })
