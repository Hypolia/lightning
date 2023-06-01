import { Fragment, ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function AuthenticationMiddleware ({ children }: Props) {
    return (
        <Fragment>{ children }</Fragment>
    )
}