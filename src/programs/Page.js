import spa from "raj-spa"
import { Route } from "../routing"
import initialProgram from "./Loading"

export default ({ router }) =>
    spa({
        router,
        initialProgram,
        getRouteProgram: route =>
            Route.match(route, {
                Home: () => import("./Home").then(program => program.default),
                Other: () => import("./Other").then(program => program.default),
                NotFound: () =>
                    import("./NotFound").then(program => program.default),
            }),
    })
