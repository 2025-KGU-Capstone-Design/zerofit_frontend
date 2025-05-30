// services/auth.ts
import http from '@/services/Http'

export interface SignupPayload {
    userId: string
    password: string
    email: string
    phone: string
    companyName: string
}

export interface SignupResponse {
    userId: string
}

export interface AvailabilityResponse {
    Available: boolean
}

export interface LoginPayload {
    userId: string
    password: string
}

export interface LoginResponse {
    token: string
}

export const authApi = {
    checkUserId: (userId: string) =>
        http.get<AvailabilityResponse>(`/api/user/availability/${userId}`),

    signup: (data: SignupPayload) =>
        http.post<SignupResponse>('/api/user', data),

    login: (data: LoginPayload) => http.post<LoginResponse>('/api/login', data),
}
