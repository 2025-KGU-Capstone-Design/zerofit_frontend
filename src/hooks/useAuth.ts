import {useCookies} from 'react-cookie'
import {authApi, LoginPayload} from '@/services/auth'
import {useState, useEffect} from 'react'

export function useAuth() {
    const [cookies, setCookie, removeCookie] = useCookies(['access_token'])
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    // 초기 마운트 시 쿠키 체크
    useEffect(() => {
        if (cookies.access_token) {
            setIsLoggedIn(true)
        }
    }, [cookies])

    const login = async (payload: LoginPayload) => {
        const {data} = await authApi.login(payload)

        setCookie('access_token', data.token, {
            path: '/',
            maxAge: 60 * 60, // 1시간
            sameSite: 'strict',
            secure: true, // HTTPS 전용
        })
        setIsLoggedIn(true)
    }

    const logout = () => {
        removeCookie('access_token', {path: '/'})
        setIsLoggedIn(false)
    }

    return {isLoggedIn, login, logout, token: cookies.access_token}
}
