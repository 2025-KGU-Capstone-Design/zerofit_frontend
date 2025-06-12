import http from '@/services/Http'
import {SolutionItem} from '@/types/solution'
import {SolutionCommentResponse} from '@/types/solutionComment'

export type SolutionHistoryApiResponse = {
    comment: SolutionCommentResponse[]
    solution: SolutionItem[]
}

export const getSolutionHistory = async (
    requestId: number
): Promise<SolutionHistoryApiResponse> => {
    const response = await http.get<SolutionHistoryApiResponse>(
        `/api/solution/history/${requestId}`
    )
    return response.data
}
