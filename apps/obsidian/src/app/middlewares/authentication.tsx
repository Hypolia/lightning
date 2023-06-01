import { useAuthentication } from '@lightning/shared/auth'
import { Fragment, ReactNode } from 'react'
import { useQuery } from 'react-query'
import { AxiosError } from 'axios'
import { Navigate } from 'react-router-dom'

type Props = {
  children: ReactNode
}

export default function AuthenticationMiddleware ({ children }: Props) {
  const { getCurrentUser } = useAuthentication()
  const { isLoading, isError } = useQuery<unknown, AxiosError>('isLoggedIn', getCurrentUser, { retry: false })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <Navigate to={"/login"} replace={true} />
  }

  return (
    <Fragment>{ children }</Fragment>
  )
}