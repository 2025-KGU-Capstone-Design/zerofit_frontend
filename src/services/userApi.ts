import http from './Http'
import type {UserData} from '@/types/auth'

export const userApi = {
    fetchProfile: () => {
        return http.get<UserData>('/api/user')
    },
}
