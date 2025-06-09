import http from './Http'
import {CompanyInput} from '@/types/companyInput'
import {SolutionResponse} from '@/types/solution'

export const solutionApi = {
    requestSolution: (data: CompanyInput, token: string) =>
        http.post<SolutionResponse>('/api/solution/request', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
}
