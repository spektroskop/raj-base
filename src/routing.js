import { createRoutes } from "tagged-routes"

const routes = createRoutes({ Home: "/", Other: "/other" }, "NotFound")

export const Route = routes.Route

export function getRouteForURL(url) {
    return routes.getRouteForURL(url.slice(1))
}

export function getURLForRoute(route) {
    return "#" + routes.getURLForRoute(route)
}

export const router = {
    emit: route => () => {
        window.location.hash = getURLForRoute(route).slice(1)
    },
    subscribe() {
        let listener
        return {
            effect(dispatch) {
                listener = () =>
                    dispatch(
                        routes.getRouteForURL(window.location.hash.slice(1)),
                    )
                window.addEventListener("hashchange", listener)
                listener() // dispatch initial route
            },
            cancel() {
                window.removeEventListener("hashchange", listener)
            },
        }
    },
}
