import http from './Http'
import {SolutionItem} from '@/types/solution'

export const fetchBookmarkedSolutions = async (
    requestId: number
): Promise<SolutionItem[]> => {
    const res = await http.get<SolutionItem[]>('/api/solution/bookmark', {
        params: {requestId},
    })
    return res.data
}
