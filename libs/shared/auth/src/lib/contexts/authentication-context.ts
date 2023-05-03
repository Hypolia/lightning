import { createContext, Dispatch, SetStateAction } from 'react'

type User = {
  id: string
  email: string
  remember_me_token: string | null,
  username: string
  provider: string
  provider_id: string
  is_admin: boolean
  is_locked: boolean
  has_email_confirmed: boolean,
  created_at: string,
  updated_at: string
}

type AuthenticationContract = {
  isLoggedIn: boolean,
  user: User | null
  token: string | null
}

type State = [
  auth: AuthenticationContract,
  setAuth: Dispatch<SetStateAction<AuthenticationContract>>
]


const AuthenticationContext = createContext<State>(null!)

export {
  User,
  AuthenticationContext,
  AuthenticationContract
}
