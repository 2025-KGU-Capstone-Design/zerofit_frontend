import http from './Http'
import {CompanyInput} from '@/types/companyInput'
import {SolutionItem} from '@/types/solution'

export const solutionApi = {
    requestSolution: (data: CompanyInput, token: string) =>
        http.post<SolutionItem>('/api/solution/request', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
}
