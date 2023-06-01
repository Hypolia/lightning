import { ApiRequestBuilder } from '@lightning/shared/api-request'
import { useContext } from 'react'
import { useCookies } from 'react-cookie'
import { AuthenticationContext } from '../contexts/authentication-context'

export function useAuthentication () {
    const [authentication, setAuthentication] = useContext(AuthenticationContext)
    const [cookie, setCookie] = useCookies(['lightning-token'])

    async function getCurrentUser (): Promise<void> {
        const { data } = await new ApiRequestBuilder()
            .get('/authentication/me')
            .headers({ 'Authorization': cookie['lightning-token'] })
            .build()

        setAuthentication({ ...authentication, user: data })
    }

    async function handleLogin (fields: { [key: string]: string }): Promise<void> {
        const { data } = await new ApiRequestBuilder()
            .post('/authentication/login')
            .formData(fields)
            .build()

        setCookie('lightning-token', data.token.type + ' ' + data.token.token)

        setAuthentication({
        ...authentication,
        user: data.user,
        token: `${data.token.type} ${data.token.token}`,
        isLoggedIn: true
        })
    }

    async function handleLogout () {}

    return {
        getCurrentUser,
        handleLogin,
        handleLogout
    }
}
