import React from "react"
import ReactDOM from "react-dom"
import Raj from "raj-react"
import { batchPrograms } from "raj-compose"
import { router } from "./routing"
import registerServiceWorker from "./registerServiceWorker"
import styled, { injectGlobal } from "styled-components"
import normalize from "styled-normalize"
import HeaderProgram from "./programs/Header"
import PageProgram from "./programs/Page"

injectGlobal`
    ${normalize}

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        line-height: 1.3;
    }
`

const Content = styled.div`
    padding: 12px 10px 8px 10px;
    display: flex;
    align-items: flex-start;
`

const Program = Raj.program(React.Component, () =>
    batchPrograms(
        [HeaderProgram({ route: router.subscribe }), PageProgram({ router })],
        ([header, page]) => (
            <React.Fragment>
                {header()}
                <Content>{page()}</Content>
            </React.Fragment>
        ),
    ),
)

ReactDOM.render(<Program />, document.getElementById("root"))

registerServiceWorker()
